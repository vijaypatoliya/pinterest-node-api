"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  var ad_account_id = String();
  var ad_group_id = String();
  try {
    var response = await pinterest.ad_groups.get(ad_account_id, ad_group_id);
    console.log(response);
  } catch (error) {
    console.log(error);
    return;
  }
};

pinsRequest();
