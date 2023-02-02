'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * GET ITEMS
   *
   * */

  var query = {
    country: String(),
    item_ids: Array(String()),
    language: String(),
    ad_account_id: String(),
  };

  try {
    var response = await pinterest.catalogs.getItems({ query });
} catch (error) {
    return;
  }
};

pinsRequest();
