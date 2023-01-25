"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {

  var ad_account_id = 'ad_account_id'
  var bulk_request_id = 'bulk_request_id'
  try {
    var response = await pinterest.bulk.download(ad_account_id, bulk_request_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
