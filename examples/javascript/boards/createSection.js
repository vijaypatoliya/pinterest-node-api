"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../../lib")(userToken);

var boardsRequest = async function () {

  var data = {
    name: String(),
  };

  var board_id = String();

  try {
    var response = await pinterest.boards.createSection(
      board_id,
      data
    );
  } catch (error) {
    return;
  }
};

boardsRequest();