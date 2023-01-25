"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var boardsRequest = async function () {
  /**
   * passing parameters
   * -------------------
   * board (The board id)
   */
  try {
    var response = await pinterest.boards.getAll({});
  } catch (error) {
    return;
  }
};

boardsRequest();
