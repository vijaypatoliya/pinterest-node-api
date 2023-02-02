"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../../lib")(userToken);

var boardsRequest = async function () {
  /**
   * CREATE BOARD SECTION
   * 
   * Passing Path Parameters:
   * ------------------------
   * board_id: String
   * 
   * */

  var board_id = 12345;

  var payload = {
    name: String(),
  };

  try {
    var response = await pinterest.boards.createSection(
      board_id,
      payload
    );
} catch (error) {
    return;
  }
};

boardsRequest();
