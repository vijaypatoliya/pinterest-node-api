"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {

  var data = {};
  try {
    var response = await pinterest.ad_accounts.get('12345');
    console.log(response)
  } catch (error) {
    console.log(error)
    return;
  }
};

pinsRequest();
