"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../../lib")(userToken);

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
