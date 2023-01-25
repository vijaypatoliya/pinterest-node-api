"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  var feed_id = "feed_id";
  var data = {
    default_availability: "IN_STOCK",
    default_currency: "USD",
    name: "string",
    format: "TSV",
    credentials: {
      password: "pa$$word",
      username: "string",
    },
    location: "string",
    preferred_processing_schedule: {
      time: "02:59",
      timezone: "Africa/Abidjan",
    },
    status: "ACTIVE",
  };
  try {
    var response = await pinterest.catalogs.updateFeed(feed_id, data);
  } catch (error) {
    return;
  }
};

pinsRequest();
