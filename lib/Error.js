'use strict';

var debug = require('debug')('pinterest:Error');
var utils = require('./utils');

module.exports = _Error;

/**
 * Generic Error Class to wrap any errors returned by pinterest-node-api
 */
function _Error() {
  this.populate.apply(this, arguments);
  var stack = (new Error(this.message)).stack;
  debug('stack ', stack);
}

// Extend Native Error
_Error.prototype = Object.create(Error.prototype);

_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function (type, message) {
  this.Type = type;
  this.Message = message;
};

_Error.extend = utils.protoExtend;

/**
 * Create subclass of internal Error class
 * (Specifically for errors returned from pinterest's REST API)
 */
var pinterestError = _Error.pinterestError = _Error.extend({
  Type: 'pinterestError',
  Message: '',
  populate: function (raw) {
    this.Type = this.type || 'unknown';
    this.Code = raw.Code || 'GenericError';
    this.Message = raw.message || raw.error || 'unknown';
    this.StatusCode = raw.StatusCode || 'unknown';
  }
});

/**
 * Helper factory which takes raw pinterest errors and outputs wrapping instances
 */
pinterestError.generate = function () {
  return new _Error('Generic', 'Unknown Error');
};

// Specific pinterest Error types:
_Error.pinterestInvalidRequestError = pinterestError.extend({ type: 'pinterestInvalidRequestError' });
_Error.pinterestAPIError = pinterestError.extend({ type: 'pinterestAPIError' });
_Error.pinterestPermissionError = pinterestError.extend({ type: 'pinterestPermissionError' });
_Error.pinterestRateLimitError = pinterestError.extend({ type: 'pinterestRateLimitError' });
_Error.pinterestConnectionError = pinterestError.extend({ type: 'pinterestConnectionError' });
