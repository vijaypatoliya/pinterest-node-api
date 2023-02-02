"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * GET BULK
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * 
   * */

  var ad_account_id = 12345;
  var payload = {
    entity_types: ["CAMPAIGN", "AD_GROUP"],
    entity_ids: ["string"],
    updated_since: "1622848072",
    campaign_filter: {
      start_time: "1622848072",
      end_time: "1622848072",
      name: "campaign name",
      campaign_status: ["RUNNING"],
      objective_type: ["AWARENESS"],
    },
    output_format: "CSV",
  };
  try {
    var response = await pinterest.bulk.get(ad_account_id, payload);
} catch (error) {
    return;
  }
};

pinsRequest();
