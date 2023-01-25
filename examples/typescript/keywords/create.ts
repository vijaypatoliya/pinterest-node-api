"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  var data = {
    keywords: [
      {
        bid: 200000,
        match_type: "BROAD",
        value: "string",
      },
    ],
    parent_id: "383791336903426391",
  };

  var ad_account_id = "ad_account_id";
  try {
    var response = await pinterest.keywords.create(ad_account_id, data);
  } catch (error) {
    return;
  }
};

pinsRequest();
