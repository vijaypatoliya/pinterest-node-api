'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  var ad_account_id = String();
  var customer_list_id = String();
  try {
    var response = await pinterest.customer_lists.get(ad_account_id, customer_list_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
