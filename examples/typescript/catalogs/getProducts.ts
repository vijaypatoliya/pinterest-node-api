'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  var product_group_id = 'product_group_id';
  try {
    var response = await pinterest.catalogs.getProducts(product_group_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
