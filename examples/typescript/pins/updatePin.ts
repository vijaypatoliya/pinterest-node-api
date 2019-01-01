'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const pinsRequest = async function () {
  pinterest.setUserToken(userToken);

  const pin = '806144402027821208';
  const data = {
    board: 'pideveloper/board-2',
    note: 'it\'s a aerospace test pin.',
    link: 'https://aerospace.org/'
  };
  const response = await pinterest.pins.updatePin(pin, data).catch(error => {
    if (error) {
      return;
    }
  });
};

pinsRequest();
