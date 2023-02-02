"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var usersRequest = async function () {
  /**
   * GET TERMS OF SERVICE
   *
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   *
   * */

  var ad_account_id = 12345;

  var query = {
    include_html: Boolean(),
    tos_type: String(),
  };

  try {
    var response = await pinterest.terms_of_service.get(ad_account_id, {
      query,
    });
   } catch (error) {
    return;
  }
};

usersRequest();
