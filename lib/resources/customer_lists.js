"use strict";

var pinterestResource = require("../Resource");
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  create: pinterestMethod({
    method: "POST",
    path: "v5/ad_accounts/{ad_account_id}/customer_lists",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),

  getAll: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/customer_lists",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),
  
  get: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/customer_lists/{customer_list_id}",
    urlParams: ["ad_account_id", "customer_list_id"],
    required: ["ad_account_id", "customer_list_id"],
  }),

  update: pinterestMethod({
    method: "PATCH",
    path: "v5/ad_accounts/{ad_account_id}/customer_lists/{customer_list_id}",
    urlParams: ["ad_account_id", "customer_list_id"],
    required: ["ad_account_id", "customer_list_id"],
  }),
});
