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
    var response = await pinterest.boards.getAll({
      query: {
        page_size: 1,
        privacy: 'PROTECTED'
      }
    });
    console.log(response)
  } catch (error) {
    console.log(error)
    return;
  }
};

boardsRequest();
