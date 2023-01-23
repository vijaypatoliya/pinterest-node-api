'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({
  get: pinterestMethod({
    method: 'GET',
    path: 'v5/ad_accounts/{ad_account_id}/bulk/download',
    urlParams: ['ad_account_id'],
    required: ['ad_account_id'],
  }),

  upsert: pinterestMethod({
    method: 'POST',
    path: 'v5/ad_accounts/{ad_account_id}/bulk/upsert',
    urlParams: ['ad_account_id'],
    required: ['ad_account_id'],
  }),

  download: pinterestMethod({
    method: 'POST',
    path: 'v5/ad_accounts/{ad_account_id}/bulk/{bulk_request_id}',
    urlParams: ['ad_account_id', 'bulk_request_id'],
    required: ['ad_account_id', 'bulk_request_id'],
  }),

});
