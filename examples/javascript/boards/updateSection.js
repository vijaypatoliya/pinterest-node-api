"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../../lib")(userToken);

var boardsRequest = async function () {
  /**
   * GET SECTIONS
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * board_id
   * */

  var payload = {
    name: String(),
  };

  var board_id = 12345;
  var section_id = 12345;

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
