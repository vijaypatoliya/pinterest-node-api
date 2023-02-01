"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  var payload = {
    media_type: String(),
  };
  try {
    var response = await pinterest.media.register(payload);
  } catch (error) {
    return;
  }
};

pinsRequest();
