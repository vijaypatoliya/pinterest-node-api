"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  var feed_id = "feed_id";
  try {
    var response = await pinterest.catalogs.getFeedProcessingResults(feed_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
