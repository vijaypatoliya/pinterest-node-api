"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var boardsRequest = async function () {
  /**
   * passing parameters
   * -------------------
   * board (The board id)
   */
  var board_id = String();
  var section_id = String();
  var query = {
    bookmark: String(),
    page_size: Number()
  }
  try {
    var response = await pinterest.boards.getAllSections(board_id, section_id, { query });
  } catch (error) {
    return;
  }
};

boardsRequest();
