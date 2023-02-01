'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var usersRequest = async function () {
  try {
    var targeting_type = String();
    var query = {
      client_id: String(),
      oauth_signature: String(),
      timestamp: String()
    }

    var response = await pinterest.resources.getTargetingOptions(targeting_type, { query });
    console.log(response);
  } catch (error) {
    console.log("error", error);
    return;
  }
};

usersRequest();
