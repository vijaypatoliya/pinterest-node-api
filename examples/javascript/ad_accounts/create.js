"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {

  var data = {
    country: "US",
    owner_user_id: "383791336903426391",
    name: "ACME Tools",
  };

  try {
    var response = await pinterest.ad_accounts.create(data);
    console.log(response);
  } catch (error) {
    console.log(error);
    return;
  }
};

pinsRequest();
