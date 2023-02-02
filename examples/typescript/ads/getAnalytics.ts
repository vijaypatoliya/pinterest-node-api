"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * GET ADS ANALYTICS
   *
   * Passing Path Parameters:
   * ad_account_id: String
   *
   * */

  var ad_account_id = 12345;

  var query = {
    start_date: String(Date()),
    end_date: String(Date()),
    ad_ids: Array(String()),
    columns: Array(String()),
    granularity: String(),
    click_window_days: Number(),
    engagement_window_days: Number(),
    view_window_days: Number(),
    conversion_report_time: String(),
  };

  try {
    var response = await pinterest.ads.getAnalytics(ad_account_id, { query });
} catch (error) {
    return;
  }
};

pinsRequest();
