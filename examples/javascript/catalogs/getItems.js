'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  var query = {
    country: String(),
    item_ids: Array(String()),
    language: String(),
    ad_account_id: String(),
  };
  try {
    var response = await pinterest.catalogs.getItems({ query });
  } catch (error) {
    return;
  }
};

pinsRequest();
