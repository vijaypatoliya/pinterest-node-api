"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET AD ACCOUNT REPORT
   *
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * 
   * */

  var ad_account_id = 12345;

  var query = { token: String() };

  try {
    var response = await pinterest.ad_accounts.getReport(ad_account_id, {
      query,
    });
   } catch (error) {
    return;
  }
};

pinsRequest();
