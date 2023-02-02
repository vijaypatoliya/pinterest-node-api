'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET OCPM ELIGIBLE CONVERSION TAGS
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * 
   * */

  var ad_account_id = 12345;

  try {
    var response = await pinterest.conversion_tags.getOcpmEligible(ad_account_id);
} catch (error) {
    return;
  }
};

pinsRequest();
