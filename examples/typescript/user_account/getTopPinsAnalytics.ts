'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var usersRequest = async function () {
  /**
   * GET TOP PINS ANALYTICS
   *
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   *
   * */

  var query = {
    start_date: String(Date()),
    end_date: String(Date()),
    sort_by: String(),
    from_claimed_content: String(),
    pin_format: String(),
    app_types: String(),
    metric_types: Array(String()),
    num_of_pins: Number(),
    created_in_last_n_days: Number(),
    ad_account_id: String()
  }

  try {
    var response = await pinterest.user_account.getTopPinsAnalytics({ query });
   } catch (error) {
    return;
  }
};

usersRequest();
