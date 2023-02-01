"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var usersRequest = async function () {
  /**
   * GET SECTIONS
   *
   * Passing Path Parameters:
   * ------------------------
   *
   * interest_id
   * */
  try {
    var query = {
      date: String(),
    };
    var response = await pinterest.resources.getMetricsReadyState({ query });
    console.log(response);
  } catch (error) {
    console.log("error", error);
    return;
  }
};

usersRequest();
