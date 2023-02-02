"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var boardsRequest = async function () {
  /**
   * GET ALL BOARD
   * 
   * */

  var query = {
    bookmark: String(),
    page_size: Number(),
    privacy: String(),
  };

  try {
    var response = await pinterest.boards.getAll({ query });
   } catch (error) {
    return;
  }
};

boardsRequest();
