'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const pinsRequest = async function () {
  pinterest.setUserToken(userToken);

  const board = 'pideveloper/test-board';
  const response = await pinterest.pins.getBoardPins(board).catch(error => {
    if (error) {
      return;
    }
  });
};

pinsRequest();
