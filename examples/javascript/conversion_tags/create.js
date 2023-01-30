"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  var payload = {
    name: "ACME Tools Tag",
  };
  var ad_account_id = String();
  try {
    var response = await pinterest.conversion_tags.create(ad_account_id, payload);
  } catch (error) {
    return;
  }
};

pinsRequest();
