"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var usersRequest = async function () {
  try {
    var interest_id = 'interest_id'
    var response = await pinterest.resources.getInterest(interest_id);
    console.log(response);
  } catch (error) {
    console.log("error", error);
    return;
  }
};

usersRequest();
