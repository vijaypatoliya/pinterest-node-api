"use strict";

var debug = require("debug")("pinterest:Resource");
var http = require("http");
var https = require("https");
var path = require("path");
var xml2js = require("xml2js");
var qs = require("qs");
var iconv = require("iconv-lite");

var utils = require("./utils");
var Error = require("./Error");

var hasOwn = {}.hasOwnProperty;

var RESPONSE_CONTENT_TYPE = [
  "text/xml",
  "text/xml;charset=utf-8",
  "application/xml",
];
// Provide extension mechanism for pinterest Resource Sub-Classes
pinterestResource.extend = utils.protoExtend;

// Expose method-creator & prepared (basic) methods
pinterestResource.methods = require("./PinterestHttpClient");

/**
 * Encapsulates request logic for a pinterest Resource
 */
function pinterestResource(pinterest, urlData) {
  this._pinterest = pinterest;
  this._urlData = urlData || {};

  this.basePath = utils.makeURLInterpolator(pinterest.getApiField("basePath"));
  this.path = utils.makeURLInterpolator(this.path);

  if (this.includeBasic) {
    this.includeBasic.forEach(function (methodName) {
      this[methodName] = pinterestResource.methods[methodName];
    }, this);
  }

  this.initialize.apply(this, arguments);
}

pinterestResource.prototype = {
  path: "",
  requestBody: {},
  requestParamsJSON: {},
  initialize: function () {},

  // Function to override the default data processor. This allows full control
  // over how a pinterestResource's request data will get converted into an HTTP
  // body. This is useful for non-standard HTTP requests. The function should
  // take method name, data, and headers as arguments.
  requestDataProcessor: null,

  // String that overrides the base API endpoint. If `overrideHost` is not null
  // then all requests for a particular resource will be sent to a base API
  // endpoint as defined by `overrideHost`.
  overrideHost: null,

  createFullPath: function (commandPath, urlData) {
    return path
      .join(
        this.basePath(urlData),
        this.path(urlData),
        typeof commandPath === "function" ? commandPath(urlData) : commandPath
      )
      .replace(/\\/g, "/"); // ugly workaround for Windows
  },

  createUrlData: function () {
    var urlData = {};
    // Merge in baseData
    for (var i in this._urlData) {
      if (hasOwn.call(this._urlData, i)) {
        urlData[i] = this._urlData[i];
      }
    }
    return urlData;
  },

  wrapTimeout: function (promise, callback) {
    if (callback) {
      // Ensure callback is called outside of promise stack.
      return promise.then(
        function (res) {
          setTimeout(function () {
            callback(null, res);
          }, 0);
        },
        function (err) {
          setTimeout(function () {
            callback(err, null);
          }, 0);
        }
      );
    }

    return promise;
  },

  _timeoutHandler: function (timeout, req, callback) {
    var self = this;
    return function () {
      var timeoutErr = new Error("ETIMEDOUT");
      timeoutErr.code = "ETIMEDOUT";

      req._isAborted = true;
      req.abort();

      callback.call(
        self,
        new Error.pinterestConnectionError({
          message:
            "Request aborted due to timeout being reached (" + timeout + "ms)",
        }),
        null
      );
    };
  },

  _responseHandler: function (
    requestParamsJSONCopy,
    req,
    userOptions,
    callback
  ) {
    var self = this;

    function processResponseType(res, responseString, callback) {
      //debug('res %o ', res);
      //debug('res.headers %o ', res.headers);
      if (
        RESPONSE_CONTENT_TYPE.indexOf(
          res.headers["content-type"].toLowerCase()
        ) > -1
      ) {
        debug("It is XML Response");
        var parser = new xml2js.Parser({
          explicitArray: false,
          ignoreAttrs: true,
        });

        parser.parseString(responseString, function (err, response) {
          //debug('response after parsing JSON %o ', response);
          return callback(null, response);
        });
      } else {
        debug("It is NON-XML Response");
        try {
          var response = JSON.parse(responseString);
          return callback(null, response);
        } catch (exception) {
          debug("exception ", exception);
          return callback(callback, responseString);
        }
      }
    }

    return function (res) {
      debug("----------- Received Response -------------");
      var dbgResponseBuffer = [];
      var headers = res.headers;
      var statusCode = res.statusCode;
      // debug('res ', res);
      try {
        statusCode = parseInt(statusCode, 10);
      } catch (Exception) {
        debug(
          "Failed to parse statusCode as statusCode not provided in the response. ",
          statusCode
        );
      }
      var charset = "";
      var content_type = "";
      var responseString = "";
      if (headers["content-type"]) {
        content_type = headers["content-type"].toLowerCase();
      }

      if (
        content_type &&
        content_type.indexOf("charset") > -1 &&
        content_type.split(";")[0] &&
        content_type.split(";")[1]
      ) {
        if (
          content_type.split(";")[1] &&
          content_type
            .split(";")[1]
            .trim()
            .match(/^((\b[^\s=]+)=(([^=]|\\=)+))*$/)[3]
        ) {
          charset = content_type
            .split(";")[1]
            .trim()
            .match(/^((\b[^\s=]+)=(([^=]|\\=)+))*$/)[3];
        }
        content_type = content_type.split(";")[0].toLowerCase();
      }

      var ResponseHeaders = headers;
      res.on("data", function (chunk) {
        dbgResponseBuffer.push(chunk);
      });
      res.on("end", function () {
        var bufferString = Buffer.concat(dbgResponseBuffer);
        /**
         * You can use Either userRaw or userCharset.
         * Both of them will not work together.
         */
        if (userOptions.userRaw === true) {
          var response = {
            data: bufferString,
            Headers: ResponseHeaders,
          };
          return callback.call(self, null, response);
        }

        if (userOptions.userCharset && userOptions.userCharset.length > 0) {
          debug("Inside user Charset option");
          charset = userOptions.userCharset;
          try {
            var win1251String = iconv.decode(bufferString, "win1251");
            responseString = iconv.encode(win1251String, charset);
          } catch (Exception) {
            debug("Exception iconv ", Exception);
            return callback.call(
              self,
              new Error.pinterestAPIError({
                message:
                  "Failed to parse response received from the pinterest API",
                StatusCode: statusCode || "unknown",
              }),
              null
            );
          }
        } else {
          responseString = bufferString.toString("utf8");
        }

        debug("responseString ", responseString);
        debug("content_type ", content_type);
        debug("statusCode ", statusCode);
        debug(
          "x-ratelimit-remaining ",
          ResponseHeaders["x-ratelimit-remaining"]
        );

        try {
          if (!responseString && statusCode < 400) {
            Object.defineProperty({}, "lastResponse", {
              enumerable: false,
              writable: false,
              value: res,
            });
            return callback.call(self, null, {});
          }
          processResponseType(res, responseString, function (error, response) {
            if (response.errors) {
              debug("It is ErrorResponse");
              var errorResponse = response.errors;
              errorResponse.Headers = ResponseHeaders;
              errorResponse.StatusCode = statusCode || "unknown";
              return callback.call(self, errorResponse, null);
            } else if (response.error) {
              debug("It is ErrorResponse have a single error");
              var errorDetail = response;
              errorDetail.Headers = ResponseHeaders;
              errorDetail.StatusCode = statusCode || "unknown";
              return callback.call(self, errorDetail, null);
            } else if (error) {
              return callback.call(
                self,
                new Error.pinterestAPIError({
                  message:
                    "Failed to parse response received from the pinterest API",
                  StatusCode: statusCode || "unknown",
                }),
                null
              );
            }
            debug(
              "-----------------------------------------------------------------"
            );
            // debug('final response %o ', response);
            // Expose res object
            Object.defineProperty(response, "lastResponse", {
              enumerable: false,
              writable: false,
              value: res,
            });
            return callback.call(self, null, response);
          });
        } catch (exception) {
          return callback.call(
            self,
            new Error.pinterestAPIError({
              message: "Invalid response received from the pinterest API",
              StatusCode: statusCode || "unknown",
            }),
            null
          );
        }
      });
    };
  },

  _errorHandler: function (req, callback) {
    var self = this;
    return function (error) {
      if (req._isAborted) {
        // already handled
        return;
      }
      callback.call(
        self,
        new Error.pinterestConnectionError({
          message: "An error occurred with our connection to pinterest",
          error: error,
        }),
        null
      );
    };
  },

  _request: function (method, path, query, data, auth, options, callback) {
    var requestParamsJSONCopy = JSON.parse(JSON.stringify(data));
    var self = this;

    self.body = "";
    var userRaw = "";
    var userCharset = "";
    /**custom option passed by user, a better way to do this would be nice */
    if (data.__RAW__) {
      userRaw = data.__RAW__;
      delete data.__RAW__;
    }
    if (data.__CHARSET__) {
      userCharset = data.__CHARSET__;
      delete data.__CHARSET__;
    }

    var authorization = "Bearer";
    if (options.authorization === "Basic") {
      authorization = options.authorization;
      var keySecret =
        self._pinterest.getApiField("key") +
        ":" +
        self._pinterest.getApiField("secret");
      var buffer = new Buffer(keySecret);
      var base64String = buffer.toString("base64");
      authorization = authorization.concat(" ", base64String);
    } else {
      authorization = authorization.concat(
        " ",
        self._pinterest.getApiField("userToken")
      );
    }

    var headers = {
      // 'Content-Type': 'application/json',
      Accept: "application/json",
      "cache-control": "no-cache",
      "Content-Language": "en-US",
      Authorization: authorization,
    };

    if (query) {
      path = path.concat("?", qs.stringify(query));
    }

    if (options.contentType && options.contentType === "application/json") {
      self.body = JSON.stringify(data);
      headers["Content-Length"] = self.body.length;
    } else if (["POST", "PUT", "PATCH"].indexOf(method) > -1) {
      headers["Content-Type"] = "application/json";
      self.body = JSON.stringify(data);
      headers["Content-Length"] = self.body.length;
    } else if (["DELETE"].indexOf(method) > -1) {
      self.body = JSON.stringify(data);
    }

    makeRequest();

    function makeRequest() {
      var timeout = self._pinterest.getApiField("timeout");
      var isInsecureConnection =
        self._pinterest.getApiField("protocol") === "http";

      var host = self.overrideHost || self._pinterest.getApiField("host");
      var params = {
        hostname: host,
        port: self._pinterest.getApiField("port"),
        path: path,
        method: method,
        headers: headers,
      };

      debug("path ", path);
      debug("params %o ", params);
      debug("self.body %o ", self.body);
      var req = (isInsecureConnection ? http : https).request(params);

      req.setTimeout(timeout, self._timeoutHandler(timeout, req, callback));
      var userOptions = {
        userCharset: userCharset,
        userRaw: userRaw,
      };
      req.on(
        "response",
        self._responseHandler(requestParamsJSONCopy, req, userOptions, callback)
      );
      req.on("error", self._errorHandler(req, callback));

      req.on("socket", function (socket) {
        socket.on(
          isInsecureConnection ? "connect" : "secureConnect",
          function () {
            // Send payload; we're safe:
            req.write(self.body);
            req.end();
          }
        );
      });
    }
  },
};

module.exports = pinterestResource;
