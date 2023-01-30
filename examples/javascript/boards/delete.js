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
  try {
    var response = await pinterest.boards.delete(board_id);
  } catch (error) {
    return;
  }
};

boardsRequest();
