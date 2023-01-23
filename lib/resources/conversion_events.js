"use strict";

var pinterestResource = require("../Resource");
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  send: pinterestMethod({
    method: "POST",
    path: "v5/ad_accounts/{ad_account_id}/events",
    urlParams: ["ad_account_id"],
    required: ["ad_account_id"],
  }),
});
