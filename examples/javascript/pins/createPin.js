'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * board (required) (The board name in the format: <username>/<board_name>)
   * note (required)
   * link
   * 
   * (one of the following three options)
   * image (Upload the image)
   * image_url (The link of the image)
   * image_base64 (The link of a Base64 encoded image)
   * 
   * (optional)
   * fields (attribution, board, color, counts, created_at, creator, id, image, link, media, metadata, note, original_link, url)
   */
  var data = {
    board: 'pideveloper/board-2',
    note: 'it\'s a test pin desc.',
    image_url: 'https://www.birmingham.ac.uk/Images/College-EPS-only/outreach/engineering/aerospace-engineering.jpg'
  };
  try {
    var response = await pinterest.pins.createPin(data);
  } catch (error) {
    return;
  }
};

pinsRequest();
