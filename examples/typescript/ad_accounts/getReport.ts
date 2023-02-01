"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {

  var ad_account_id = 12345;
  var query = { token: String() }
  try {
    var response = await pinterest.ad_accounts.getReport(ad_account_id, { query });
    console.log(response)
  } catch (error) {
    console.log(error)
    return;
  }
};

pinsRequest();
