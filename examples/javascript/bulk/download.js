"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET SECTIONS
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * ad_account_id
   * bulk_request_id
   * */
  var ad_account_id = 12345
  var bulk_request_id = 12345
  try {
    var response = await pinterest.bulk.download(ad_account_id, bulk_request_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
