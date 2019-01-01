'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const pinsRequest = async function () {
  pinterest.setUserToken(userToken);

  const pin = '806144402027821208';
  const response = await pinterest.pins.deletePin(pin).catch(error => {
    if (error) {
      return;
    }
  });
};

pinsRequest();
