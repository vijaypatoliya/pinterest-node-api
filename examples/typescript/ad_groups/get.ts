"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  /**
   * passing parameters
   * -------------------
   *
   * link
   * title
   * description
   * board_id (required) (The board id)
   * note (required)
   * dominant_color
   * board_section_id
   * alt_text
   * media_source.source_type
   * media_source.content_type
   * media_source.data (The link of a Base64 encoded image)
   * parent_pin_id
   *
   * (optional)
   * fields (link)
   */

  var data = {
    board: "pideveloper/board-2",
    note: "it's a test pin desc.",
    image_url:
      "https://www.birmingham.ac.uk/Images/College-EPS-only/outreach/engineering/aerospace-engineering.jpg",
  };
  try {
    var response = await pinterest.pins.createPin(data);
  } catch (error) {
    return;
  }
};

pinsRequest();
