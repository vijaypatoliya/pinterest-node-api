'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const usersRequest = async function () {
  pinterest.setUserToken(userToken);

  const data = {
    query: 'board 1',
    fields: 'counts,id,name,url'
  };
  const response = await pinterest.users.searchUserBoards(data).catch(error => {
    if (error) {
      return;
    }
  });
};

usersRequest();
