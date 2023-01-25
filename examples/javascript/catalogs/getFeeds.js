"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  try {
    var response = await pinterest.catalogs.getFeeds();
  } catch (error) {
    return;
  }
};

pinsRequest();
