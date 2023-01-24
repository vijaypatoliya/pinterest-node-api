'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var boardsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * board (The board id)
   */
  var board = 'your board id';
  try {
    var response = await pinterest.boards.deleteBoard(board);
  } catch (error) {
    return;
  }
};

boardsRequest();
