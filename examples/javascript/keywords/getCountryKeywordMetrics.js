'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  var ad_account_id = String();
  var query = {
    country_code: String(),
    keywords: Array(String())
  }
  try {
    var response = await pinterest.keywords.getCountryKeywordMetrics(ad_account_id, query);
  } catch (error) {
    return;
  }
};

pinsRequest();
