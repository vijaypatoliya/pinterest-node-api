'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  
  var feed_id = 'feed_id';
  try {
    var response = await pinterest.catalogs.deleteFeed(feed_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
