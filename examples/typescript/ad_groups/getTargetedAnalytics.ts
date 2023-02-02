"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * GET AD GROUP TARGETED ANALYTICS
   *
   * Passing Path Parameters:
   * ad_account_id: String
   *
   * */
  var ad_account_id = 12345;
  var query = {
    ad_group_ids: Array(String()),
    start_date: String(Date()),
    end_date: String(Date()),
    targeting_types: Array(String()),
    columns: Array(String()),
    granularity: String(),
    click_window_days: Number(),
    engagement_window_days: Number(),
    view_window_days: Number(),
    conversion_report_time: String(),
    attribution_types: String()
  }
  try {
    var response = await pinterest.ad_groups.getTargetedAnalytics(ad_account_id, { query });
   } catch (error) {
    return;
  }
};

pinsRequest();
