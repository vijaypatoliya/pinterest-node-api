'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var usersRequest = async function () {
  /**
   * GET PRODUCT GROUP PROMOTION
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * product_group_promotion_id: String
   *
   * */

  var ad_account_id = 12345;
  var product_group_promotion_id = 12345;

  try {
    var response = await pinterest.product_group_promotions.get(ad_account_id, product_group_promotion_id);
   } catch (error) {
    return;
  }
};

usersRequest();
