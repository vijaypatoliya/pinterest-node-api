'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  var ad_account_id = 12345;
  var query = {
    page_size: Number(),
    order: String(),
    bookmark: String()
  }
  try {
    var response = await pinterest.customer_lists.getAll(ad_account_id, { query });
  } catch (error) {
    return;
  }
};

pinsRequest();
