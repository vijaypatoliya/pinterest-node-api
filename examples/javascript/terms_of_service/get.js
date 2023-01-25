'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {

  try {
    var ad_account_id = 'ad_account_id'
    var response = await pinterest.terms_of_service.get(ad_account_id);
    console.log(response)
  } catch (error) {
    console.log('error', error)
    return;
  }
};

usersRequest();
