"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * CREATE KEYWORDS
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   *
   * */

  var ad_account_id = 12345;

  var payload = {
    keywords: [
      {
        bid: 200000,
        match_type: "BROAD",
        value: "string",
      },
    ],
    parent_id: "383791336903426391",
  };

  try {
    var response = await pinterest.keywords.create(ad_account_id, payload);
} catch (error) {
    return;
  }
};

pinsRequest();
