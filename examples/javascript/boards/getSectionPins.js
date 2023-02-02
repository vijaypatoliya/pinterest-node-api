"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../../lib")(userToken);

var boardsRequest = async function () {
  /**
   * GET BOARD SECTION PINS
   * 
   * Passing Path Parameters:
   * ------------------------
   * board_id: String
   * section_id: String
   * */
  var board_id = 12345;
  var section_id = 12345;
  var query = {
    bookmark: String(),
    page_size: Number()
  }
  try {
    var response = await pinterest.boards.getSectionPins(board_id, section_id, { query });
} catch (error) {
    return;
  }
};

boardsRequest();
