"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * CREATE CUSTOMER LIST
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   *
   * */

  var ad_account_id = 12345;

  var payload = {
    name: "The Glengarry Glen Ross leads",
    records: "email1@pinterest.com,email2@pinterest.com,..<more records>",
    list_type: "EMAIL",
    exceptions: {},
  };

  try {
    var response = await pinterest.customer_lists.create(ad_account_id, payload);
} catch (error) {
    return;
  }
};

pinsRequest();
