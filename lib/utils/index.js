"use strict";

var hasOwn = {}.hasOwnProperty;
var _ = require("lodash");

var utils = (module.exports = {
  isAuthKey: function (key) {
    return typeof key === "string" && /^(?:[a-z]{2}_)?[A-z0-9]{32}$/.test(key);
  },

  isOptionsHash: function (o) {
    o = JSON.parse(JSON.stringify(o));
    return (
      _.isPlainObject(o) &&
      ["api_key"].some(function (key) {
        return o.hasOwnProperty(key);
      })
    );
  },

  isQuery: function (o) {
    o = JSON.parse(JSON.stringify(o));
    return _.isPlainObject(o) && o.hasOwnProperty("query");
  },

  /**
   * Outputs a new function with interpolated object property values.
   * Use like so:
   *   var fn = makeURLInterpolator('some/url/{param1}/{param2}');
   *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
   */
  makeURLInterpolator: (function () {
    var rc = {
      '\n': '\\n', '\"': '\\\"',
      '\u2028': '\\u2028', '\u2029': '\\u2029'
    };
    return function makeURLInterpolator(str) {
      var cleanString = str.replace(/["\n\r\u2028\u2029]/g, function ($0) {
        return rc[$0];
      });
      return function (outputs) {
        return cleanString.replace(/\{([\s\S]+?)\}/g, function ($0, $1) {
          return encodeURIComponent(outputs[$1] || "");
        });
      };
    };
  })(),

  /**
   * Return the data argument from a list of arguments
   */
  getDataFromArgs: function (args) {
    if (
      !args.length ||
      !(_.isPlainObject(args[0]) || _.isArrayLikeObject(args[0])) ||
      utils.isOptionsHash(args[0])
    ) {
      return {};
    }
    return !utils.isQuery(args[0]) ? args.shift() : {};
  },

  /**
   * Return the query object from a list of arguments
   */
  getQueryFromArgs: function (args) {
    if (
      !args.length ||
      !_.isPlainObject(args[0]) ||
      utils.isOptionsHash(args[0])
    ) {
      return {};
    }
    return utils.isQuery(args[0]) ? args.shift().query : {};
  },

  /**
   * Return the options hash from a list of arguments
   */
  getOptionsFromArgs: function (args) {
    var opts = {
      auth: null,
      headers: {},
    };
    if (args.length > 0) {
      var arg = args[args.length - 1];
      if (utils.isAuthKey(arg)) {
        opts.auth = args.pop();
      }
    }
    return opts;
  },

  /**
   * Provide simple "Class" extension mechanism
   */
  protoExtend: function (sub) {
    var Super = this;
    var Constructor = hasOwn.call(sub, "constructor") ? sub.constructor : function () {
      Super.apply(this, arguments);
    };
    Constructor.prototype = Object.create(Super.prototype);
    for (var i in sub) {
      if (hasOwn.call(sub, i)) {
        Constructor.prototype[i] = sub[i];
      }
    }
    for (i in Super) {
      if (hasOwn.call(Super, i)) {
        Constructor[i] = Super[i];
      }
    }
    return Constructor;
  },
});
