'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({
  getAll: pinterestMethod({
    method: 'GET',
    path: 'v5/ad_accounts/{ad_account_id}/campaigns',
    urlParams: ['ad_account_id'],
    required: ['ad_account_id'],
  }),

  create: pinterestMethod({
    method: 'POST',
    path: 'v5/ad_accounts/{ad_account_id}/campaigns',
    urlParams: ['ad_account_id'],
    required: ['ad_account_id'],
  }),

  update: pinterestMethod({
    method: 'PATCH',
    path: 'v5/ad_accounts/{ad_account_id}/campaigns',
    urlParams: ['ad_account_id'],
    required: ['ad_account_id'],
  }),

  get: pinterestMethod({
    method: 'GET',
    path: 'v5/ad_accounts/{ad_account_id}/campaigns/{campaign_id}',
    urlParams: ['ad_account_id', 'campaign_id'],
    required: ['ad_account_id', 'campaign_id'],
  }),

  getAnalytics: pinterestMethod({
    method: 'GET',
    path: 'v5/ad_accounts/{ad_account_id}/campaigns/analytics',
    urlParams: ['ad_account_id'],
    required: ['ad_account_id'],
  }),

  getTargetedAnalytics: pinterestMethod({
    method: 'GET',
    path: 'v5/ad_accounts/{ad_account_id}/campaigns/targeting_analytics',
    urlParams: ['ad_account_id'],
    required: ['ad_account_id'],
  }),

});
