"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET SECTIONS
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * ad_account_id
   * */
  var payload = {
    keywords: [
      {
        bid: 200000,
        match_type: "BROAD",
        value: "string",
      },
    ],
    parent_id: "383791336903426391",
  };

  var ad_account_id = 12345;
  try {
    var response = await pinterest.keywords.create(ad_account_id, payload);
  } catch (error) {
    return;
  }
};

pinsRequest();
