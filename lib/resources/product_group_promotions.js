'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  getAnalytics: pinterestMethod({
    method: 'GET',
    path: 'v5/ad_accounts/{ad_account_id}/product_groups/analytics',
    urlParams: ['ad_account_id'],
    required: ['ad_account_id']
  }),

  create: pinterestMethod({
    method: 'POST',
    path: 'v5/ad_accounts/{ad_account_id}/product_group_promotions',
    urlParams: ['ad_account_id'],
    required: ['ad_account_id']
  }),

  update: pinterestMethod({
    method: 'PATCH',
    path: 'v5/ad_accounts/{ad_account_id}/product_group_promotions',
    urlParams: ['ad_account_id'],
    required: ['ad_account_id']
  }),

  list: pinterestMethod({
    method: 'GET',
    path: 'v5/ad_accounts/{ad_account_id}/product_group_promotions',
    urlParams: ['ad_account_id'],
    required: ['ad_account_id']
  }),

  get: pinterestMethod({
    method: 'GET',
    path: 'v5/ad_accounts/{ad_account_id}/product_group_promotions/{product_group_promotion_id}',
    urlParams: ['ad_account_id', 'product_group_promotion_id'],
    required: ['ad_account_id', 'product_group_promotion_id']
  }),

});
