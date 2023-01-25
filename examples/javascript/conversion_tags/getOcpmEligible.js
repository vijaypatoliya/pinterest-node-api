'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  var ad_account_id = 'ad_account_id';
  try {
    var response = await pinterest.conversion_tags.getOcpmEligible(ad_account_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
