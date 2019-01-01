'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const sectionsRequest = async function () {
  pinterest.setUserToken(userToken);

  const board = '806144470738408510';
  const data = {
    title: 'test section',
    // initial_pins: '806144402026288820'
  };
  const response = await pinterest.sections.createBoardSection(board, data).catch(error => {
    if (error) {
      return;
    }
  });
};

sectionsRequest();
