'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * pin (pin ID)
   * 
   * (optional)
   * fields (attribution, board, color, counts, created_at, creator, id, image, link, media, metadata, note, original_link, url)
   */
  var pin = '806144402027821208';
  try {
    var response = await pinterest.pins.getPin(pin);
  } catch (error) {
    return;
  }
};

pinsRequest();
