'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {

  var ad_account_id = String();
  var conversion_tag_id = String();
  try {
    var response = await pinterest.conversion_tags.get(ad_account_id, conversion_tag_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
