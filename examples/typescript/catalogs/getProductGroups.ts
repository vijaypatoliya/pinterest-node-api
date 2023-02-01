'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  var query = {
    feed_id: String(),
    bookmark: String(),
    page_size: Number(),
    ad_account_id: String()
  }
  try {
    var response = await pinterest.catalogs.getProductGroups({ query });
  } catch (error) {
    return;
  }
};

pinsRequest();
