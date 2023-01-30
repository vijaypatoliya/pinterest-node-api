'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {

  var product_group_id = String();
  var query = {
    ad_account_id: String()
  };
  try {
    var response = await pinterest.catalogs.getProductCount(product_group_id, { query });
  } catch (error) {
    return;
  }
};

pinsRequest();
