"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var usersRequest = async function () {
  /**
   * GET METRICS READY STATE
   *
   * Passing Path Parameters:
   * ------------------------
   * interest_id
   *
   * */

  var query = {
    date: String(),
  };

  try {
    var response = await pinterest.resources.getMetricsReadyState({ query });
   } catch (error) {
    return;
  }
};

usersRequest();
