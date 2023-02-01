"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


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

  var payload = {
    name: String(),
  };

  var board_id = 12345;
  var section_id = 12345;

  try {
    var response = await pinterest.boards.updateSection(
      board_id,
      section_id,
      payload
    );
  } catch (error) {
    return;
  }
};

boardsRequest();
