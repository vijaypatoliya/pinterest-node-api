'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {

  var ad_account_id = 'ad_account_id';
  var conversion_tag_id = 'conversion_tag_id';
  try {
    var response = await pinterest.conversion_tags.get(ad_account_id, conversion_tag_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
