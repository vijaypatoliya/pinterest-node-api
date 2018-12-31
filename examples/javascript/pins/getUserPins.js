'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * fields (attribution, board, color, counts, created_at, creator, id, image, link, media, metadata, note, original_link, url)
   */
  var data = {};
  try {
    var response = await pinterest.pins.getUserPins(data);
  } catch (error) {
    return;
  }
};

pinsRequest();
