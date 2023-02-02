"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var boardsRequest = async function () {
  /** CREATE BOARD */
  var payload = {
    name: "Summer Recipes",
    description: "My favorite summer recipes",
    privacy: "PUBLIC",
  };

  try {
    var response = await pinterest.boards.create(payload);
} catch (error) {
    return;
  }
};

boardsRequest();
