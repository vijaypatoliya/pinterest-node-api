"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  try {

    var ad_account_id = String()
    var audience_id = String()

    var response = await pinterest.audiences.get(ad_account_id, audience_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
