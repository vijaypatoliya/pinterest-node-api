'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const pinsRequest = async function () {
  pinterest.setUserToken(userToken);

  const data = {
    board: 'pideveloper/board-2',
    note: 'it\'s a test pin desc.',
    image_url: 'https://www.birmingham.ac.uk/Images/College-EPS-only/outreach/engineering/aerospace-engineering.jpg'
  };
  const response = await pinterest.pins.createPin(data).catch(error => {
    if (error) {
      return;
    }
  });
};

pinsRequest();
