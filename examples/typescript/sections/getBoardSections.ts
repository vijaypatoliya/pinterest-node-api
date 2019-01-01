'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const sectionsRequest = async function () {
  pinterest.setUserToken(userToken);

  const board = '806144470738408510';
  const response = await pinterest.sections.getBoardSections(board).catch(error => {
    if (error) {
      return;
    }
  });
};

sectionsRequest();
