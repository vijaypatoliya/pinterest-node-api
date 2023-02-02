"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET AUDIENCE
   *
   * Passing Path Parameters:
   * ad_account_id: String
   * audience_id: String
   * */

  var ad_account_id = 12345;
  var audience_id = 12345;

  try {
    var response = await pinterest.audiences.get(ad_account_id, audience_id);
} catch (error) {
    return;
  }
};

pinsRequest();
