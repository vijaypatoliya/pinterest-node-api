"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../../lib")(userToken);

var boardsRequest = async function () {
  /**
   * GET SECTIONS
   * 
   * Passing Path Parameters:
   * ------------------------
   * board_id: required(string())
   * */
  var board_id = 12345;
  var query = {
    bookmark: String(),
    page_size: Number()
  }
  try {
    var response = await pinterest.boards.getSections(board_id, { query });
  } catch (error) {
    return;
  }
};

boardsRequest();
