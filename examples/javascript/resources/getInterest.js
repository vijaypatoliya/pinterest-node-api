"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var usersRequest = async function () {
  /**
   * GET INTEREST
   * 
   * Passing Path Parameters:
   * ------------------------
   * interest_id
   * 
   * */

  var interest_id = 12345;

  try {
    var response = await pinterest.resources.getInterest(interest_id);
   } catch (error) {
    return;
  }
};

usersRequest();
