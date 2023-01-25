'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  var ad_account_id = 'ad_account_id'
  try {
    var response = await pinterest.product_group_promotions.get(ad_account_id);
    console.log(response);
  } catch (error) {
    console.log("error", error);
    return;
  }
};

usersRequest();
