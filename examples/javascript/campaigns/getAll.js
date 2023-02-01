'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {

  var ad_account_id = String();
  var query = {
    campaign_ids: Array(String()),
    entity_statuses: Array(String()),
    page_size: Number(),
    order: String(),
    bookmark: String(),
  }
  try {
    var response = await pinterest.campaigns.getAll(ad_account_id, { query });
  } catch (error) {
    return;
  }
};

pinsRequest();
