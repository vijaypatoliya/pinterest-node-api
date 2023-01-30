"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

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
