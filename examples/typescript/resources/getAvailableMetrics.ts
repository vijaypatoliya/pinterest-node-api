'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var usersRequest = async function () {
  /**
   * GET AVAILABLE METRICS
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * 
   * */

  var query = {
    report_type: String()
  }

  try {
    var response = await pinterest.resources.getAvailableMetrics({ query });
   } catch (error) {
    return;
  }
};

usersRequest();
