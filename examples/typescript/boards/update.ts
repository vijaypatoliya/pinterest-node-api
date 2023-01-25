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
   * board (The board name in the format: <username>/<board_name>)
   * name
   * description
   * 
   * (optional)
   * fields (privacy: Enum ["PUBLIC" "SECRET"])
   */

  var data = {
    name: 'your board name',
    description: 'your board description'
  };

  var board_id = 'board_id';

  try {
    var response = await pinterest.boards.update(board_id, data);
  } catch (error) {
    return;
  }
};

boardsRequest();
