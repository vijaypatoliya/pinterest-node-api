"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  try {
    var response = await pinterest.catalogs.getFeeds();
  } catch (error) {
    return;
  }
};

pinsRequest();
