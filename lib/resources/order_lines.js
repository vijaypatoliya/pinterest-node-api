'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  getAll: pinterestMethod({
    method: 'GET',
    path: 'v5/ad_accounts/{ad_account_id}/order_lines',
    urlParams: ['ad_account_id'],
    required: ['ad_account_id'],
  }),

  get: pinterestMethod({
    method: 'POST',
    path: 'v5/ad_accounts/{ad_account_id}/order_lines/{order_line_id}',
    urlParams: ['ad_account_id', 'order_line_id'],
    required: ['ad_account_id', 'order_line_id'],
  }),

});
