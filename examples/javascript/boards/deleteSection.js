'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var boardsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * board (The board id)
   */
  var board_id = String();
  var section_id = String()
  try {
    var response = await pinterest.boards.deleteSection(board_id, section_id);
  } catch (error) {
    return;
  }
};

boardsRequest();
