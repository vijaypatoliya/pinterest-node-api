'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  var ad_account_id = String();
  var query = {
    filter_deleted: Boolean(),
  };
  try {
    var response = await pinterest.conversion_tags.getAll(ad_account_id, { query });
  } catch (error) {
    return;
  }
};

pinsRequest();
