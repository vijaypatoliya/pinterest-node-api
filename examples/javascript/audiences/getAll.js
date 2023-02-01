"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET ALL AUDIENCE
   *
   * Passing Path Parameters:
   * - ad_account_id: required(string())
   * */
  try {
    var ad_account_id = 12345;
    var query = {
      bookmark: String(),
      order: String(),
      page_size: Number(),
    };

    var response = await pinterest.audiences.getAll(ad_account_id, { query });
  } catch (error) {
    return;
  }
};

pinsRequest();
