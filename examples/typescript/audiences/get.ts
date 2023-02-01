"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  try {

    var ad_account_id = 12345
    var audience_id = 12345

    var response = await pinterest.audiences.get(ad_account_id, audience_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
