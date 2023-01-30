"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  try {

    var ad_account_id = String()
    var query = {
      audience_insight_type: String()
    }
    var response = await pinterest.audience_insights.get(ad_account_id, { query });
  } catch (error) {
    return;
  }
};

pinsRequest();
