'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

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
    name: 'your board name',
    description: 'your board description'
  };

  var board_id = 12345;

  try {
    var response = await pinterest.boards.update(board_id, payload);
  } catch (error) {
    return;
  }
};

boardsRequest();
