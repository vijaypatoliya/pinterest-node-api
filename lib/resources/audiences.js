"use strict";

var pinterestResource = require("../Resource");
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({
  getAll: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/audiences",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  create: pinterestMethod({
    method: "POST",
    path: "v5/ad_accounts/{ad_account_id}/audiences",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  get: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/audiences/{audience_id}",
    urlParams: ["ad_account_id", "audience_id"],
    required: ["ad_account_id", "audience_id"],
  }),

  update: pinterestMethod({
    method: "PATCH",
    path: "v5/ad_accounts/{ad_account_id}/audiences/{audience_id}",
    urlParams: ["ad_account_id", "audience_id"],
    required: ["ad_account_id", "audience_id"],
  }),

});
