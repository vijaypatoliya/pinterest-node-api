'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {

  var batch_id = 'batch_id';
  try {
    var response = await pinterest.catalogs.getItemsBatch(batch_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
