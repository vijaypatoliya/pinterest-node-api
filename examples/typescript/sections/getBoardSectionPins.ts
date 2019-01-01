'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const sectionsRequest = async function () {
  pinterest.setUserToken(userToken);

  const section = 'pideveloper/board-2/lighting';
  const response = await pinterest.sections.getBoardSectionPins(section).catch(error => {
    if (error) {
      return;
    }
  });
};

sectionsRequest();
