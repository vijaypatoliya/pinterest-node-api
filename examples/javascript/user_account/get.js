'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * GET USER ACCOUNT
   *
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * 
   * */

  var query = {
    ad_account_id: String()
  }

  try {
    var response = await pinterest.user_account.get({ query });
   } catch (error) {
    return;
  }
};

usersRequest();
