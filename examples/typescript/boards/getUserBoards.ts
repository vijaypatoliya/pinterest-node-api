'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

var boardsRequest = async function () {
  
  pinterest.setUserToken(userToken);

  try {
    var response = await pinterest.boards.getUserBoards({});
  } catch (error) {
    return;
  }
};

boardsRequest();
