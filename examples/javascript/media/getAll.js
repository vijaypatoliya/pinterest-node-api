"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /** GET ALL MEDIA  */

  var query = {
    bookmark: String(),
    page_size: Number(),
  };

  try {
    var response = await pinterest.media.list({ query });
} catch (error) {
    return;
  }
};

pinsRequest();
