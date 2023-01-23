"use strict";

var pinterestResource = require("../Resource");
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  get: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/keywords",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  create: pinterestMethod({
    method: "POST",
    path: "v5/ad_accounts/{ad_account_id}/keywords",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  getCountryKeywordMetrics: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/keywords/metrics",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

});
