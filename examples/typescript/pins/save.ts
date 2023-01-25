"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  var pin_id = "pin_id";
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
