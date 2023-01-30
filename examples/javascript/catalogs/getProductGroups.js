'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  var query = {
    feed_id: String(),
    bookmark: String(),
    page_size: Number(),
    ad_account_id: String()
  }
  try {
    var response = await pinterest.catalogs.getProductGroups({ query });
  } catch (error) {
    return;
  }
};

pinsRequest();
