"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET AD ACCOUNT REPORT
   *
   * Passing Path Parameters:
   * - ad_account_id: required(string())
   *
   * */
  var ad_account_id = 12345;
  var query = { token: String() };
  try {
    var response = await pinterest.ad_accounts.getReport(ad_account_id, {
      query,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    return;
  }
};

pinsRequest();
