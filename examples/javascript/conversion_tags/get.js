'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET CONVERSION TAG
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * conversion_tag_id: String
   *
   * */

  var ad_account_id = 12345;

  var conversion_tag_id = 12345;

  try {
    var response = await pinterest.conversion_tags.get(ad_account_id, conversion_tag_id);
} catch (error) {
    return;
  }
};

pinsRequest();
