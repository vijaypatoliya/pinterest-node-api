"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET ALL AD ACCOUNT
   * 
   * */
  var query = {
    bookmark: String(),
    page_size:Number(),
    include_shared_accounts:Boolean()
  }
  try {
    var response = await pinterest.ad_accounts.getAll({ query })
    console.log(response)
  } catch (error) {
    return;
  }
};

pinsRequest();
