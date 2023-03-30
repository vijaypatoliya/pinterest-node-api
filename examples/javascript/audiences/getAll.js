"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET ALL AUDIENCES
   *
   * Passing Path Parameters:
   * ad_account_id: String
   * */

  var ad_account_id = 12345;

  var query = {
    bookmark: String(),
    order: String(),
    page_size: Number(),
  };

  try {
    var response = await pinterest.audiences.list(ad_account_id, { query });
} catch (error) {
    return;
  }
};

pinsRequest();
