"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /** Create AD ACCOUNTS */
  var payload = {
    country: "US",
    owner_user_id: "383791336903426391",
    name: "ACME Tools",
  };

  try {
    var response = await pinterest.ad_accounts.create(payload);
    console.log(response);
  } catch (error) {
    console.log(error);
    return;
  }
};

pinsRequest();
