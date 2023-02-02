"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var usersRequest = async function () {
  /**
   * GET TARGETTING OPTIONS
   *
   * Passing Path Parameters:
   * ------------------------
   * targeting_type
   *
   * */

  var targeting_type = 12345;

  var query = {
    client_id: String(),
    oauth_signature: String(),
    timestamp: String(),
  };

  try {
    var response = await pinterest.resources.getTargetingOptions(
      targeting_type,
      { query }
    );
   } catch (error) {
    return;
  }
};

usersRequest();
