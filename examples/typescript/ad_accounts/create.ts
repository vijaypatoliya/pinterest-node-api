"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {

  var payload = {
    country: "US",
    owner_user_id: "383791336903426391",
    name: "ACME Tools",
  };

  try {
    var response = await pinterest.ad_accounts.create(payload);
    console.log(response);
  } catch (error) {
    console.log(error);
    return;
  }
};

pinsRequest();
