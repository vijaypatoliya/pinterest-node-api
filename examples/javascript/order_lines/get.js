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
   * ad_account_id
   * order_line_id
   * */
  var ad_account_id = 12345;
  var order_line_id = 12345;
  try {
    var response = await pinterest.order_lines.get(ad_account_id, order_line_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
