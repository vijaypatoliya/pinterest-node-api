'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {

  var batch_id = String();
  var query = {
    ad_account_id: String()
  };
  try {
    var response = await pinterest.catalogs.getItemsBatch(batch_id, { query });
  } catch (error) {
    return;
  }
};

pinsRequest();
