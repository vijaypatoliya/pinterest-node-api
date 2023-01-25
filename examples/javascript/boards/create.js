"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var boardsRequest = async function () {
  var data = {
    name: "Summer Recipes",
    description: "My favorite summer recipes",
    privacy: "PUBLIC",
  };
  try {
    var response = await pinterest.boards.create(data);
  } catch (error) {
    return;
  }
};

boardsRequest();
