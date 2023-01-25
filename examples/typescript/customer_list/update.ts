"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  var ad_account_id = "ad_account_id";
  var customer_list_id = 'customer_list_id';
  var data = {
    records: "email2@pinterest.com,email6@pinterest.com,",
    operation_type: "REMOVE",
    exceptions: {
      code: 2,
      message: "Advertiser not found.",
    },
  };
  try {
    var response = await pinterest.customer_lists.update(ad_account_id, customer_list_id, data);
  } catch (error) {
    return;
  }
};

pinsRequest();
