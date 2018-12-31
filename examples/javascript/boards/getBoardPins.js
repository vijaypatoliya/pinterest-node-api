'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var boardsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * board (The board name in the format: <username>/<board_name>)
   * 
   * (optional)
   * fields (attribution, board, color, counts, created_at, creator, id, image, link, media, metadata, note, original_link, url)
   */
  var board = 'pideveloper/test-board';
  try {
    var response = await pinterest.boards.getBoardPins(board);
  } catch (error) {
    return;
  }
};

boardsRequest();
