'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {

  var pin_id = 12345;
  var query = {
    start_date: String(Date()),
    end_date: String(Date()),
    app_types: String(),
    app_types: String(),
    metric_types: Array(String()) || String(),
    split_field: String(),
    ad_account_id: String()
  }
  try {
    var response = await pinterest.pins.getAnalytics(pin_id, { query });
  } catch (error) {
    return;
  }
};

pinsRequest();
