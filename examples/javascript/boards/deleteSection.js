'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var boardsRequest = async function () {
  /**
   * DELETE BOARD SECTION
   * 
   * Passing Path Parameters:
   * ------------------------
   * board_id: required(string())
   * section_id: required(string())
   * */
  var board_id = 12345;
  var section_id = 12345
  try {
    var response = await pinterest.boards.deleteSection(board_id, section_id);
  } catch (error) {
    return;
  }
};

boardsRequest();
