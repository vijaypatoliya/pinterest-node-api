'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var usersRequest = async function () {
  var ad_account_id = String()
  var query = {
    start_date: String(Date()),
    end_date: String(Date()),
    product_group_ids: Array(String()),
    columns: Array(String()),
    granularity: String(),
    click_window_days: Number(),
    engagement_window_days: Number(),
    view_window_days: Number(),
    conversion_report_time: String(),
  };
  try {
    var response = await pinterest.product_group_promotions.getAnalytics(ad_account_id, query);
    console.log(response);
  } catch (error) {
    console.log("error", error);
    return;
  }
};

usersRequest();
