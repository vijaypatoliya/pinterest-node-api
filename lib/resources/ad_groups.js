"use strict";

var pinterestResource = require("../Resource");
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({
  getTargetedAnalytics: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/ad_groups/targeting_analytics",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  getAll: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/ad_groups",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  create: pinterestMethod({
    method: "POST",
    path: "v5/ad_accounts/{ad_account_id}/ad_groups",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  update: pinterestMethod({
    method: "PATCH",
    path: "v5/ad_accounts/{ad_account_id}/ad_groups",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  get: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/ad_groups/{ad_group_id}",
    urlParams: ["ad_account_id", "ad_group_id"],
    required: ["ad_account_id", "ad_group_id"],
  }),

  getAnalytics: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/ad_groups/analytics",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  getBidFloors: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/bid_floor",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),
});
