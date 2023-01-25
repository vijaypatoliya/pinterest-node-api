"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  var data = {
    default_country: "US",
    default_availability: "IN_STOCK",
    default_currency: "USD",
    name: "string",
    format: "TSV",
    default_locale: "en_US",
    credentials: {
      password: "pa$$word",
      username: "string",
    },
    location: "string",
    preferred_processing_schedule: {
      time: "02:59",
      timezone: "Africa/Abidjan",
    },
  };
  try {
    var response = await pinterest.catalogs.createFeed(data);
  } catch (error) {
    return;
  }
};

pinsRequest();
