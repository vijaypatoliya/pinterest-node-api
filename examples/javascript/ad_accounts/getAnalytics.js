"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  try {
    var query = {
      start_date: String(),
      end_date: String(),
      columns: String(),
      granularity: String(),
      click_window_days: Number(),
      engagement_window_days: Number(),
      view_window_days: Number(),
      conversion_report_time: String()
    }
    var ad_account_id = String()
    var response = await pinterest.ad_accounts.getAnalytics(ad_account_id, { query })
    console.log(response)
  } catch (error) {
    return;
  }
};

pinsRequest();