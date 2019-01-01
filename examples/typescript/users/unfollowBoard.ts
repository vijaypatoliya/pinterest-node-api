'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const usersRequest = async function () {
  pinterest.setUserToken(userToken);

  const board = '4teebeat/bodybuilding-t-shirts'
  const response = await pinterest.users.unfollowBoard(board).catch(error => {
    if (error) {
      return;
    }
  });
};

usersRequest();
