"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {

  var ad_account_id = 12345
  var bulk_request_id = 12345
  try {
    var response = await pinterest.bulk.download(ad_account_id, bulk_request_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
