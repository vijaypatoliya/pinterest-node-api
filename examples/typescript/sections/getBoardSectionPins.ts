'use strict';

const userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();

const sectionsRequest = async function () {
  pinterest.setUserToken(userToken);

  var board = "867787490638395104";
  var section = "5277099961081714743";
  const response = await pinterest.sections.getBoardSectionPins(board, section).catch(error => {
    if (error) {
      return;
    }
  });
};

sectionsRequest();
