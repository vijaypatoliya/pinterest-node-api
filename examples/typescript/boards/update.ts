'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var boardsRequest = async function () {

  /**
   * UPDATE BOARD
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * board_id
   * */

  var board_id = 12345;

  var payload = {
    name: 'your board name',
    description: 'your board description'
  };

  try {
    var response = await pinterest.boards.update(board_id, payload);
} catch (error) {
    return;
  }
};

boardsRequest();
