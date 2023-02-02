"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET FEEDS
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * feed_id
   * */
  var query = {
    bookmark: String(),
    page_size: Number(),
    ad_account_id: String(),
  }

  try {
    var response = await pinterest.catalogs.getFeeds({ query });
} catch (error) {
    return;
  }
};

pinsRequest();
