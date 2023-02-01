'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET SECTIONS
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * media_id
   * */
  var media_id = 12345;
  try {
    var response = await pinterest.media.get(media_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
