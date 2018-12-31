'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var boardsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * board (The board name in the format: <username>/<board_name>)
   */
  var board = 'pideveloper/board-11';
  try {
    var response = await pinterest.boards.deleteBoard(board);
  } catch (error) {
    return;
  }
};

boardsRequest();
