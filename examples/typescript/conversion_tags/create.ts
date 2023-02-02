"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * CREATE CONVERSION TAGS
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * 
   * */

  var ad_account_id = 12345;

  var payload = {
    name: "ACME Tools Tag",
  };

  try {
    var response = await pinterest.conversion_tags.create(ad_account_id, payload);
} catch (error) {
    return;
  }
};

pinsRequest();
