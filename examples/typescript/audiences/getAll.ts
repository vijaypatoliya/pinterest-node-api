"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {

  try {

    var ad_account_id = 12345;
    var query = {
      bookmark: String(),
      order: String(),
      page_size: Number()
    }

    var response = await pinterest.audiences.getAll(ad_account_id, { query });
  } catch (error) {
    return;
  }
};

pinsRequest();
