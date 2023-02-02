"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET AD ACCOUNT
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * 
   * */

  var ad_account_id = 12345;

  try {
    var response = await pinterest.ad_accounts.get(ad_account_id);
   } catch (error) {
    return;
  }
};

pinsRequest();
