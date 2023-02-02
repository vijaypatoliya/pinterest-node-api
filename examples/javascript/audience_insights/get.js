"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET AUDIENCE INSIGHTS
   *
   * Passing Path Parameters:
   * ad_account_id: String
   *
   * */
  var ad_account_id = 12345;

  var query = {
    audience_insight_type: String(),
  };

  try {
    var response = await pinterest.audience_insights.get(ad_account_id, {
      query,
    });
} catch (error) {
    return;
  }
};

pinsRequest();
