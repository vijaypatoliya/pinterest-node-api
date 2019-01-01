'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const usersRequest = async function () {
  pinterest.setUserToken(userToken);

  const data = {
    pin: '806144402026290934'
  };
  const response = await pinterest.users.getUserBoardSuggestions(data).catch(error => {
    if (error) {
      return;
    }
  });
};

usersRequest();
