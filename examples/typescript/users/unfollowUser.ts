'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const usersRequest = async function () {
  pinterest.setUserToken(userToken);

  const user = '4teebeat'
  const response = await pinterest.users.unfollowUser(user).catch(error => {
    if (error) {
      return;
    }
  });
};

usersRequest();
