'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * board (The board name in the format: <username>/<board_name>)
   */
  var board = '4teebeat/bodybuilding-t-shirts'
  try {
    var response = await pinterest.users.unfollowBoard(board);
  } catch (error) {
    return;
  }
};

usersRequest();
