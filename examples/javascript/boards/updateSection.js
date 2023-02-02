"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../../lib")(userToken);

var boardsRequest = async function () {
  /**
   * UPDATE BOARD SECTION
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * board_id
   * */

  var board_id = 12345;
  var section_id = 12345;

  var payload = {
    name: String(),
  };

  try {
    var response = await pinterest.boards.updateSection(
      board_id,
      section_id,
      payload
    );
} catch (error) {
    return;
  }
};

boardsRequest();
