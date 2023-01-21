'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const sectionsRequest = async function () {
  pinterest.setUserToken(userToken);

  const board = '867787490638395104';
  const section = '5007816082331826124';
  const response = await pinterest.sections.deleteBoardSection(board, section).catch(error => {
    if (error) {
      return;
    }
  });
};

sectionsRequest();
