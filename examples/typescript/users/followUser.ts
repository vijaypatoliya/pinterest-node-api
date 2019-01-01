'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const usersRequest = async function () {
  pinterest.setUserToken(userToken);

  const data = {
    user: '4teebeat'
  };
  const response = await pinterest.users.followUser(data).catch(error => {
    if (error) {
      return;
    }
  });
};

usersRequest();
