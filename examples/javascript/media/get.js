'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  var media_id = 'media_id';
  try {
    var response = await pinterest.media.get(media_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
