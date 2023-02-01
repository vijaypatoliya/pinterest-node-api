"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET AD GROUP
   *
   * Passing Path Parameters:
   * - ad_account_id: required(string())
   * - ad_group_id: required(string())
   *
   * */
  var ad_account_id = 12345;
  var ad_group_id = 12345;
  try {
    var response = await pinterest.ad_groups.get(ad_account_id, ad_group_id);
    console.log(response);
  } catch (error) {
    console.log(error);
    return;
  }
};

pinsRequest();
