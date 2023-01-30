"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {

  var ad_account_id = String()
  var bulk_request_id = String()
  try {
    var response = await pinterest.bulk.download(ad_account_id, bulk_request_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
