'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * GET FEED
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * feed_id
   * */

  var feed_id = 12345;

  var query = {
    ad_account_id: String()
  }

  try {
    var response = await pinterest.catalogs.getFeed(feed_id, { query });
} catch (error) {
    return;
  }
};

pinsRequest();
