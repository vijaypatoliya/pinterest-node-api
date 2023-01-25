'use strict';

// var debug = require('debug')('pinterest:pinterest-node-api-index');
pinterest.DEFAULT_HOST = 'api.pinterest.com';
pinterest.DEFAULT_PORT = '443';
pinterest.DEFAULT_BASE_PATH = '/';
pinterest.DEFAULT_RESPONSE_FORMAT = '.json';
pinterest.DEFAULT_API_VERSION = null;

// Use node's default timeout:
pinterest.DEFAULT_TIMEOUT = require('http').createServer().timeout;

pinterest.PACKAGE_VERSION = require('../package.json').version;

var resources = {
  user_account: require('./resources/user_account'),
  boards: require('./resources/boards'),
  pins: require('./resources/pins'),
  ad_accounts: require('./resources/ad_accounts'),
  ad_groups: require('./resources/ad_groups'),
  ads: require('./resources/ads'),
  audience_insights: require('./resources/audience_insights'),
  audiences: require('./resources/audiences'),
  boards: require('./resources/boards'),
  bulk: require('./resources/bulk'),
  campaigns: require('./resources/campaigns'),
  catalogs: require('./resources/catalogs'),
  conversion_events: require('./resources/conversion_events'),
  conversion_tags: require('./resources/conversion_tags'),
  customer_lists: require('./resources/customer_lists'),
  keywords: require('./resources/keywords'),
  media: require('./resources/media'),
  oauth: require('./resources/oauth'),
  order_lines: require('./resources/order_lines'),
  pins: require('./resources/pins'),
  product_group_promotions: require('./resources/product_group_promotions'),
  resources: require('./resources/resources'),
  terms: require('./resources/terms'),
  terms_of_service: require('./resources/terms_of_service'),
  user_account: require('./resources/user_account'),
};

pinterest.pinterestResource = require('./Resource');
pinterest.resources = resources;

function pinterest(clientAccessToken) {
  if (!(this instanceof pinterest)) {
    return new pinterest(clientAccessToken);
  }

  this._api = {
    auth: null,
    host: pinterest.DEFAULT_HOST,
    port: pinterest.DEFAULT_PORT,
    basePath: pinterest.DEFAULT_BASE_PATH,
    version: pinterest.DEFAULT_API_VERSION,
    timeout: pinterest.DEFAULT_TIMEOUT
  };

  this._prepResources();
  this.setUserToken(clientAccessToken);
  this.setResponseFormat(pinterest.DEFAULT_RESPONSE_FORMAT);
}

pinterest.prototype = {

  setHost: function (host, port, protocol) {
    this._setApiField('host', host);
    if (port) {
      this.setPort(port);
    }
    if (protocol) {
      this.setProtocol(protocol);
    }
  },

  setProtocol: function (protocol) {
    this._setApiField('protocol', protocol.toLowerCase());
  },

  setPort: function (port) {
    this._setApiField('port', port);
  },

  setResponseFormat: function (format) {
    this._setApiField('format', format);
  },

  setUserToken: function (token) {
    if (token) {
      this._setApiField('userToken', token);
    }
  },

  setTimeout: function (timeout) {
    this._setApiField('timeout', timeout === null ? pinterest.DEFAULT_TIMEOUT : timeout);
  },

  _setApiField: function (key, value) {
    this._api[key] = value;
  },

  getApiField: function (key) {
    return this._api[key];
  },

  _prepResources: function () {
    for (var name in resources) {
      this[name[0].toLowerCase() + name.substring(1)] = new resources[name](this);
    }
  }
};

module.exports = pinterest;

module.exports.pinterest = pinterest;
