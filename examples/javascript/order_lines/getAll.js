'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET ALL ORDER LINES
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * 
   * */

  var ad_account_id = 12345;

  var query = {
    page_size: Number(),
    order: String(),
    bookmark: String()
  }

  try {
    var response = await pinterest.order_lines.getAll(ad_account_id, { query });
} catch (error) {
    return;
  }
};

pinsRequest();
