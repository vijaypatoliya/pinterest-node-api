'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const boardsRequest = async function () {
  pinterest.setUserToken(userToken);

  const data = {
    name: 'Board 11',
    description: 'it\'s a board no 11.'
  };
  const board = 'pideveloper/test-board';
  const response = await pinterest.boards.updateBoard(board, data).catch(error => {
    if (error) {
      return;
    }
  });
};

boardsRequest();
