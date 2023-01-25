"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {

  try {
    var ad_account_id = 12345;
    var ads_id = 12345;

    var response = await pinterest.ads.get(ad_account_id, ads_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
