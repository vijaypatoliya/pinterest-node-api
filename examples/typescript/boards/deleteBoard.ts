'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

var boardsRequest = async function () {

  pinterest.setUserToken(userToken);

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
