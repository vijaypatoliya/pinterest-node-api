'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  var ad_account_id = String();
  var query = {
    filter_deleted: Boolean(),
  };
  try {
    var response = await pinterest.conversion_tags.getAll(ad_account_id, { query });
  } catch (error) {
    return;
  }
};

pinsRequest();
