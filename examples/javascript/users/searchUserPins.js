'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * query (Pin descriptions)
   * 
   * (optional)
   * fields (attribution, board, color, counts, created_at, creator, id, image, link, media, metadata, note, original_link, url)
   */
  var data = {
    query: 'test',
    fields: 'id,board,link,note,url'
  };
  try {
    var response = await pinterest.users.searchUserPins(data);
  } catch (error) {
    return;
  }
};

usersRequest();
