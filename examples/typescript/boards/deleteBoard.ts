'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const boardsRequest = async function () {
  pinterest.setUserToken(userToken);

  const board = 'pideveloper/board-11';
  const response = await pinterest.boards.deleteBoard(board).catch(error => {
    if (error) {
      return;
    }
  });
};

boardsRequest();
