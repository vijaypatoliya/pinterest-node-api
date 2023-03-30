'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * GET ALL PRODUCT GROUP PROMOTIONS
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * 
   * */

  var ad_account_id = 12345;

  var query = {
    product_group_promotion_ids: Array(String()),
    entity_statuses: Array(String()),
    ad_group_id: String(),
    page_size: Number(),
    order: String(),
    bookmark: String(),
  };
  try {
    var response = await pinterest.product_group_promotions.list(ad_account_id, { query });
   } catch (error) {
    return;
  }
};

usersRequest();
