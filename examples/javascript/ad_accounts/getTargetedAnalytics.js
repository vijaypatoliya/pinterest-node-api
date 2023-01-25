"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {

  var ad_account_id = 12345;
  try {
    var response = await pinterest.ad_accounts.getTargetedAnalytics(ad_account_id);
    console.log(response)
  } catch (error) {
    console.log(error)
    return;
  }
};

pinsRequest();
