"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  var payload = {
    link: "https://www.pinterest.com/",
    title: "string",
    description: "string",
    dominant_color: "#6E7874",
    alt_text: "string",
    board_id: "string",
    board_section_id: "string",
    media_source: {
      source_type: "image_base64",
      content_type: "image/jpeg",
      data: "string",
    },
    parent_pin_id: "string",
  };
  try {
    var response = await pinterest.pins.create(payload);
  } catch (error) {
    return;
  }
};

pinsRequest();
