"use strict";

var pinterestResource = require("../Resource");
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({
  getTargetedAnalytics: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/ads/targeting_analytics",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  getAll: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/ads",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  create: pinterestMethod({
    method: "POST",
    path: "v5/ad_accounts/{ad_account_id}/ads",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  update: pinterestMethod({
    method: "PATCH",
    path: "v5/ad_accounts/{ad_account_id}/ads",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  get: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/ads/{ads_id}",
    urlParams: ["ad_account_id", "ads_id"],
    required: ["ad_account_id", "ads_id"],
  }),

  getAnalytics: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/ads/analytics",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  createPreview: pinterestMethod({
    method: "POST",
    path: "v5/ad_accounts/{ad_account_id}/ad_previews",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

});
