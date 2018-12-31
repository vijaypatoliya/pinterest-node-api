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
  var data = {
    board: '4teebeat/bodybuilding-t-shirts'
  };
  try {
    var response = await pinterest.users.followBoard(data);
  } catch (error) {
    return;
  }
};

usersRequest();
