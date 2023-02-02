'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * GET AD ACCOUNT COUNTRIES
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * 
   * */

  var query = {
    report_type: String()
  }

  try {
    var response = await pinterest.resources.getAdAccountCountries({ query });
   } catch (error) {
    return;
  }
};

usersRequest();
