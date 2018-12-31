'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * fields (attribution, board, color, counts, created_at, creator, id, image, link, media, metadata, note, original_link, url)
   */
  var data = {};
  try {
    var response = await pinterest.users.getUserPins(data);
  } catch (error) {
    return;
  }
};

usersRequest();
