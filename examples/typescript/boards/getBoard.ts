'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const boardsRequest = async function () {
  pinterest.setUserToken(userToken);

  const board = 'pideveloper/test-board';
  const response = await pinterest.boards.getBoard(board).catch(error => {
    if (error) {
      return;
    }
  });
};

boardsRequest();
