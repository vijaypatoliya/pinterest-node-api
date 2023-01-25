'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var usersRequest = async function () {

  try {
    var ad_account_id = 'ad_account_id'
    var response = await pinterest.terms_of_service.get(ad_account_id);
    console.log(response)
  } catch (error) {
    console.log('error', error)
    return;
  }
};

usersRequest();
