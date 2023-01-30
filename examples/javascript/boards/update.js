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
   * fields (privacy: Enum ["PUBLIC" "SECRET"])
   */

  var payload = {
    name: 'your board name',
    description: 'your board description'
  };

  var board_id = String();

  try {
    var response = await pinterest.boards.update(board_id, payload);
  } catch (error) {
    return;
  }
};

boardsRequest();
