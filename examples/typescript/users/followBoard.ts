'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const usersRequest = async function () {
  pinterest.setUserToken(userToken);

  const data = {
    board: '4teebeat/bodybuilding-t-shirts'
  };
  const response = await pinterest.users.followBoard(data).catch(error => {
    if (error) {
      return;
    }
  });
};

usersRequest();
