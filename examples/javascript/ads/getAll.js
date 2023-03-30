"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET ALL ADS
   *
   * Passing Path Parameters:
   * ad_account_id: String
   *
   * */

  var ad_account_id = 12345;

  var query = {
    campaign_ids: Array(String()),
    ad_group_ids: Array(String()),
    ad_ids: Array(String()),
    entity_statuses: Array(String()),
    entity_statuses: Array(String()),
    page_size: Number(),
    order: String(),
    bookmark: String(),
  };

  try {
    var response = await pinterest.ads.list(ad_account_id, { query });
} catch (error) {
    return;
  }
};

pinsRequest();
