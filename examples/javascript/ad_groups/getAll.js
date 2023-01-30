"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  var ad_account_id = String();
  var query = {
    campaign_ids: Array(String()),
    ad_group_ids: Array(String()),
    entity_statuses: Array(String()),
    page_size: Number(),
    order: String(),
    bookmark: String(),
    translate_interests_to_names: Boolean()
  }
  try {
    var response = await pinterest.ad_groups.getAll(ad_account_id, { query });
    console.log(response);
  } catch (error) {
    console.log(error);
    return;
  }
};

pinsRequest();
