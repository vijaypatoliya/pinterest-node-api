"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  var ad_account_id = String();
  try {
    var response = await pinterest.ad_groups.getBidFloors(ad_account_id);
    console.log(response);
  } catch (error) {
    console.log(error);
    return;
  }
};

pinsRequest();
