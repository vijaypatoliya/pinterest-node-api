"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../../lib")(userToken);

var boardsRequest = async function () {
  /**
   * passing parameters
   * -------------------
   * board (The board id)
   */
  var board_id = String();
  var section_id = String();
  var query = {
    bookmark: String(),
    page_size: Number()
  }
  try {
    var response = await pinterest.boards.getAllSections(board_id, section_id, { query });
  } catch (error) {
    return;
  }
};

boardsRequest();
