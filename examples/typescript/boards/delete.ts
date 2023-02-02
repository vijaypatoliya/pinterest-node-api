'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var boardsRequest = async function () {
  /**
   * DELETE BOARD
   * 
   * Passing Path Parameters:
   * ------------------------
   * board_id: String
   * 
   * */
  var board_id = 12345;
  try {
    var response = await pinterest.boards.delete(board_id);
} catch (error) {
    return;
  }
};

boardsRequest();
