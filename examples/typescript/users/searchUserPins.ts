'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const usersRequest = async function () {
  pinterest.setUserToken(userToken);

  const data = {
    query: 'test',
    fields: 'id,board,link,note,url'
  };
  const response = await pinterest.users.searchUserPins(data).catch(error => {
    if (error) {
      return;
    }
  });
};

usersRequest();
