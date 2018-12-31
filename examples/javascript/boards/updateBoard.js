'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var boardsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * board (The board name in the format: <username>/<board_name>)
   * name
   * description
   * 
   * (optional)
   * fields (counts, created_at, creator, description, id, image, name, privacy, reason, url)
   */
  var data = {
    name: 'Board 11',
    description: 'it\'s a board no 11.'
  };
  var board = 'pideveloper/test-board';
  try {
    var response = await pinterest.boards.updateBoard(board, data);
  } catch (error) {
    return;
  }
};

boardsRequest();
