"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../../lib")(userToken);

var boardsRequest = async function () {
  /**
   * passing parameters
   * -------------------
   *
   * board (The board name in the format: <username>/<board_name>)
   * name
   * description
   *
   * (optional)
   * fields (privacy: Enum ["PUBLIC" "SECRET"])
   */

  var data = {
    name: String(),
  };

  var board_id = String();
  var section_id = String();

  try {
    var response = await pinterest.boards.updateSection(
      board_id,
      section_id,
      data
    );
  } catch (error) {
    return;
  }
};

boardsRequest();
