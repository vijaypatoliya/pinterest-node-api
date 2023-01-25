'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {

  var pin = 'pin_id';
  try {
    var response = await pinterest.pins.delete(pin);
  } catch (error) {
    return;
  }
};

pinsRequest();
