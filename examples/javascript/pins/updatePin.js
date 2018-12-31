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
   * board (The board name in the format: <username>/<board_name>)
   * note
   * link
   * 
   * (optional)
   * fields (attribution, board, color, counts, created_at, creator, id, image, link, media, metadata, note, original_link, url)
   */
  var pin = '806144402027821208';
  var data = {
    board: 'pideveloper/board-2',
    note: 'it\'s a aerospace test pin.',
    link: 'https://aerospace.org/'
  };
  try {
    var response = await pinterest.pins.updatePin(pin, data);
  } catch (error) {
    return;
  }
};

pinsRequest();
