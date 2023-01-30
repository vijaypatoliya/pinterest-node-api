'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  var ad_account_id = String()
  var campaign_id = String()
  try {
    var response = await pinterest.campaigns.get(ad_account_id, campaign_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
