'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {

  var product_group_id = 'product_group_id';
  try {
    var response = await pinterest.catalogs.deleteProductGroup(product_group_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
