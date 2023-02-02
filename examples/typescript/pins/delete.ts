'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * DELETE PIN
   * 
   * Passing Path Parameters:
   * ------------------------
   * pin_id
   * 
   * */

  var pin_id = 12345;

  try {
    var response = await pinterest.pins.delete(pin_id);
} catch (error) {
    return;
  }
};

pinsRequest();
