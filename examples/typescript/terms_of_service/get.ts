'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var usersRequest = async function () {

  try {
    var ad_account_id = 12345;
    var query = {
      include_html: Boolean(),
      tos_type: String()
    }
    var response = await pinterest.terms_of_service.get(ad_account_id, { query });
    console.log(response)
  } catch (error) {
    console.log('error', error)
    return;
  }
};

usersRequest();
