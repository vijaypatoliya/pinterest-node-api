"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {

  var ad_account_id = String();
  try {
    var query = {
      start_date: Date(),
      end_date: Date(),
      targeting_types: [String()],
      columns: [String()],
      granularity: String(),
      click_window_days: Number(),
      engagement_window_days: Number(),
      view_window_days: Number(),
      conversion_report_time: String(),
      attribution_types: String()
    }
    var response = await pinterest.ad_accounts.getTargetedAnalytics(ad_account_id, { query });
    console.log(response)
  } catch (error) {
    console.log(error)
    return;
  }
};

pinsRequest();
