"use strict";

var pinterestResource = require("../Resource");
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  getAll: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/conversion_tags",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  create: pinterestMethod({
    method: "POST",
    path: "v5/ad_accounts/{ad_account_id}/conversion_tags",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  getPageVisit: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/conversion_tags/page_visit",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  get: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/conversion_tags/{conversion_tag_id}",
    urlParams: ["ad_account_id", "conversion_tag_id"],
    required: ["ad_account_id", "conversion_tag_id"],
  }),

  getOcpmEligible: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/conversion_tags/ocpm_eligible",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

});
