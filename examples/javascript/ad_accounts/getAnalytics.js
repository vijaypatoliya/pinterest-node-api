"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  try {
    const ad_account_id = 12345
    var response = await pinterest.ad_accounts.getAnalytics(ad_account_id)
    console.log(response)
  } catch (error) {
    return;
  }
};

pinsRequest();
