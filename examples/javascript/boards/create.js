"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var boardsRequest = async function () {
  /**
   * passing parameters
   * -------------------
   *
   * name
   * description
   *
   * (optional)
   * fields (
   *    privacy: Enum ["PUBLIC" "SECRET"]
   * )
   */
  var data = {
    name: "your board name",
    description: "your board description",
  };
  try {
    var response = await pinterest.boards.createBoard(data);
  } catch (error) {
    return;
  }
};

boardsRequest();
