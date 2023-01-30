'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  try {
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
    var response = await pinterest.user_account.getAnalytics({ query });
    console.log(response)
  } catch (error) {
    console.log('error', error)
    return;
  }
};

usersRequest();
