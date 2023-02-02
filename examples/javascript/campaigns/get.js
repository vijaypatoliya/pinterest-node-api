'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET CAMPAIGN
   * 
   * Passing Path Parameters:
   * ------------------------ 
   * ad_account_id: String
   * campaign_id: String
   * 
   * */

  var ad_account_id = 12345;
  var campaign_id = 12345;

  try {
    var response = await pinterest.campaigns.get(ad_account_id, campaign_id);
} catch (error) {
    return;
  }
};

pinsRequest();
