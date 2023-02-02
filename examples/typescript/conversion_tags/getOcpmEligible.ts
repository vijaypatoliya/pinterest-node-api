'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


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
