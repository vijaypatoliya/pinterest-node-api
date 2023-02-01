"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET ADS
   *
   * Passing Path Parameters:
   * - ad_account_id: required(string())
   * - ads_id: required(string())
   *
   * */
  try {
    var ad_account_id = 12345;
    var ads_id = 12345;

    var response = await pinterest.ads.get(ad_account_id, ads_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
