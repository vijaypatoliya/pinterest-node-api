'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * GET PRODUCTS
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * product_group_id
   * */

  var product_group_id = 12345;

  var query = {
    bookmark: String(),
    page_size: Number(),
    ad_account_id: String(),
  }

  try {
    var response = await pinterest.catalogs.getProducts(product_group_id, { query });
} catch (error) {
    return;
  }
};

pinsRequest();
