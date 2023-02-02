'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var usersRequest = async function () {
  /**
   * GET USER ACCOUNT ANALYTICS
   *
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * 
   * */

  var query = {
    start_date: String(Date()),
    end_date: String(Date()),
    from_claimed_content: String(),
    pin_format: String(),
    app_types: String(),
    metric_types: Array(String()),
    split_field: String(),
    ad_account_id: String(),
  }

  try {
    var response = await pinterest.user_account.getAnalytics({ query });
   } catch (error) {
    return;
  }
};

usersRequest();
