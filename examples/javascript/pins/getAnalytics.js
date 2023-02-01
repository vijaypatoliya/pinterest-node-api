'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET SECTIONS
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * pin_id
   * */
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
