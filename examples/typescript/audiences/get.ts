"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  try {

    var ad_account_id = String()
    var audience_id = String()

    var response = await pinterest.audiences.get(ad_account_id, audience_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
