'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET SECTIONS
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * ad_account_id
   * */
  var ad_account_id = 12345;
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
