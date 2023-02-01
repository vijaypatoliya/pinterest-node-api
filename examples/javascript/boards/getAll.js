"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var boardsRequest = async function () {
  /**
   * GET ALL BOARD
   * 
   * */
  var query = {
    bookmark: String(),
    page_size: Number(),
    privacy: String(),
  };
  try {
    var response = await pinterest.boards.getAll({ query });
    console.log(response);
  } catch (error) {
    console.log(error);
    return;
  }
};

boardsRequest();
