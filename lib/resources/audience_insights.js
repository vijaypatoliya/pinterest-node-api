"use strict";

var pinterestResource = require("../Resource");
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({
  get: pinterestMethod({
    method: "GET",
    path: "v5/ad_accounts/{ad_account_id}/audience_insights",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  })

});
