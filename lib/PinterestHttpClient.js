'use strict';

// var debug = require('debug')('pinterest:PinterestHttpClient');
var Promise = require('bluebird');
var utils = require('./utils');
var OPTIONAL_REGEX = /^optional!/;
var _ = require('lodash');
const QueryString = require('qs');

/**
 * Create an API method from the declared spec.
 *
 * @param [spec.method='GET'] Request Method (POST, GET, DELETE, PUT)
 * @param [spec.path=''] Path to be appended to the API BASE_PATH, joined with
 *  the instance's path (e.g. 'users' or 'boards')
 * @param [spec.required=[]] Array of required arguments in the order that they
 *  must be passed by the consumer of the API. Subsequent optional arguments are
 *  optionally passed through a hash (Object) as the penultimate argument
 *  (preceding the also-optional callback argument
 * @param [spec.encode] Function for mutating input parameters to a method.
 *  Usefully for applying transforms to data on a per-method basis.
 */

module.exports = {

  pinterestMethod: function (spec) {
    var commandPath = typeof spec.path === 'function' ? spec.path
      : utils.makeURLInterpolator(spec.path || '');
    var requestMethod = (spec.method || 'GET').toUpperCase();
    var urlParams = spec.urlParams || [];
    var encode = spec.encode || function (data) {
      return data;
    };
    return function () {
      var self = this;
      var args = [].slice.call(arguments);
      var callback = typeof args[args.length - 1] === 'function' && args.pop();
      var urlData = this.createUrlData();

      return this.wrapTimeout(new Promise((function (resolve, reject) {
        for (var i = 0, l = urlParams.length; i < l; ++i) {
          // Note that we shift the args array after every iteration so this just
          // grabs the "next" argument for use as a URL parameter.
          var arg = args[0];

          var param = urlParams[i];

          var isOptional = OPTIONAL_REGEX.test(param);
          param = param.replace(OPTIONAL_REGEX, '');

          if (!arg) {
            if (isOptional) {
              urlData[param] = '';
              continue;
            }

            return reject(new Error(
              'pinterest: Argument "' + urlParams[i] + '" required, but got: ' + arg +
              ' (on API request to ' + requestMethod + ' ' + commandPath + ')'
            ));
          }

          urlData[param] = args.shift();
        }
        var query = {}, data = {};
        if (args[0] && utils.isQuery(args[0])) {
          query = utils.getQueryFromArgs(args);
        } else {
          data = encode(utils.getDataFromArgs(args));
        }

        if (args[0] && !utils.isQuery(args[0])) {
          data = encode(utils.getDataFromArgs(args));
        } else if (_.isEmpty(query)) {
          query = utils.getQueryFromArgs(args);
        }
  
        var opts = utils.getOptionsFromArgs(args);

        if (args.length) {
          var err = new Error('pinterest: Unknown arguments (' + args + ').');
          return reject(err);
        }


        var requestPath = this.createFullPath(commandPath, urlData);

        function requestCallback(err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(
              spec.transformResponseData ?
                spec.transformResponseData(response) :
                response
            );
          }
        }

        var options = { headers: Object.assign(opts.headers, spec.headers) };
        options.useBody = spec.useBody || false;
        options.authorization = spec.authorization || '';
        options.contentType = spec.contentType || '';
        self._request(requestMethod, requestPath, query, data, opts.auth, options, requestCallback);
      }).bind(this)), callback);
    };
  },

  setMetadata: function (id, key, value, auth, cb) {
    var self = this;
    var data = key;
    var isObject = _.isPlainObject(key);
    // We assume null for an empty object
    var isNull = data === null || (isObject && !Object.keys(data).length);

    // Allow optional passing of auth & cb:
    if ((isNull || isObject) && typeof value === 'string') {
      auth = value;
    } else if (typeof auth !== 'string') {
      if (!cb && typeof auth === 'function') {
        cb = auth;
      }
      auth = null;
    }

    var urlData = this.createUrlData();
    var path = this.createFullPath('/' + id, urlData);

    return this.wrapTimeout(new Promise((function (resolve, reject) {
      if (isNull) {
        // Reset metadata:
        sendMetadata(null, auth);
      } else if (!isObject) {
        // Set individual metadata property:
        var metadata = {};
        metadata[key] = value;
        sendMetadata(metadata, auth);
      } else {
        // Set entire metadata object after resetting it:
        this._request('POST', path, {}, {
          metadata: null
        }, auth, {}, function (err) {
          if (err) {
            return reject(err);
          }
          sendMetadata(data, auth);
        });
      }

      function sendMetadata(metadata, auth) {
        self._request('POST', path, {}, {
          metadata: metadata
        }, auth, {}, function (err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(response.metadata);
          }
        });
      }
    }).bind(this)), cb);
  },

  getMetadata: function (id, auth, cb) {
    if (!cb && typeof auth === 'function') {
      cb = auth;
      auth = null;
    }

    var urlData = this.createUrlData();
    var path = this.createFullPath('/' + id, urlData);

    return this.wrapTimeout(new Promise((function (resolve, reject) {
      this._request('GET', path, {}, {}, auth, {}, function (err, response) {
        if (err) {
          reject(err);
        } else {
          resolve(response.metadata);
        }
      });
    }).bind(this)), cb);
  }

};
