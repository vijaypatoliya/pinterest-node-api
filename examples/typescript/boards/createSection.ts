"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var boardsRequest = async function () {

  var payload = {
    name: String(),
  };

  var board_id = String();

  try {
    var response = await pinterest.boards.createSection(
      board_id,
      payload
    );
  } catch (error) {
    return;
  }
};

boardsRequest();
