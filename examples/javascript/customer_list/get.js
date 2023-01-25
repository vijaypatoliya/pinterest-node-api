'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  var ad_account_id = "ad_account_id";
  var customer_list_id = 'customer_list_id';
  try {
    var response = await pinterest.customer_lists.get(ad_account_id, customer_list_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
