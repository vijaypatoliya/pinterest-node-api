"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * SAVE PIN
   * 
   * Passing Path Parameters:
   * ------------------------
   * pin_id
   * 
   * */

  var pin_id = 12345;

  var payload = {
    board_id: "string",
    board_section_id: "string",
  };

  try {
    var response = await pinterest.pins.save(pin_id, payload);
} catch (error) {
    return;
  }
};

pinsRequest();
