"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var boardsRequest = async function () {
  /** CREATE BOARD */
  var payload = {
    name: "Summer Recipes",
    description: "My favorite summer recipes",
    privacy: "PUBLIC",
  };

  try {
    var response = await pinterest.boards.create(payload);
} catch (error) {
    return;
  }
};

boardsRequest();
