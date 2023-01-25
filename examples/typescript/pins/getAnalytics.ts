'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {

  var pin_id = 'pin_id';
  try {
    var response = await pinterest.pins.getAnalytics(pin_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
