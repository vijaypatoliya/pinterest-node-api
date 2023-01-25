"use strict";

var pinterestResource = require("../Resource");
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({
  getAll: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts",
  }),

  create: pinterestMethod({
    method: "POST",
    path: "v5/ad_accounts",
  }),

  get: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  getAnalytics: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/analytics",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  getReport: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/reports",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),


  createReport: pinterestMethod({
    method: "POST",
    path: "v5/ad_accounts/{ad_account_id}/reports",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  getTargetedAnalytics: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/targeting_analytics",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  })

});
