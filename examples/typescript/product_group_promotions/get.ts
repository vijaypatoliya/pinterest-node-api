'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var usersRequest = async function () {
  var ad_account_id = String();
  var product_group_promotion_id = String();
  try {
    var response = await pinterest.product_group_promotions.get(ad_account_id, product_group_promotion_id);
    console.log(response);
  } catch (error) {
    console.log("error", error);
    return;
  }
};

usersRequest();
