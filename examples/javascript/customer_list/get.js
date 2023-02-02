'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET CUSTOMER LIST
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * customer_list_id: String
   * 
   * */

  var ad_account_id = 12345;
  var customer_list_id = 12345;

  try {
    var response = await pinterest.customer_lists.get(ad_account_id, customer_list_id);
} catch (error) {
    return;
  }
};

pinsRequest();
