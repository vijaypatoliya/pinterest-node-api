"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var boardsRequest = async function () {
  var data = {
    name: "Summer Recipes",
    description: "My favorite summer recipes",
    privacy: "PUBLIC",
  };
  try {
    var response = await pinterest.boards.create(data);
  } catch (error) {
    return;
  }
};

boardsRequest();
