"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  var feed_id = String();
  var payload = {
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
  var query = {
    ad_account_id: String()
  }
  try {
    var response = await pinterest.catalogs.updateFeed(feed_id, { query }, payload);
  } catch (error) {
    return;
  }
};

pinsRequest();
