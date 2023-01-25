"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

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
