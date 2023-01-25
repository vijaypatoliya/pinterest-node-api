"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  var ad_account_id = "ad_account_id";
  var data = {
    name: "The Glengarry Glen Ross leads",
    records: "email1@pinterest.com,email2@pinterest.com,..<more records>",
    list_type: "EMAIL",
    exceptions: {},
  };
  try {
    var response = await pinterest.customer_lists.create(ad_account_id, data);
  } catch (error) {
    return;
  }
};

pinsRequest();
