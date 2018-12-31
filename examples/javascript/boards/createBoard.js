'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var boardsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * name
   * description
   * 
   * (optional)
   * fields (counts, created_at, creator, description, id, image, name, privacy, reason, url)
   */
  var data = {
    name: 'test board',
    description: 'it\'s a test board'
  };
  try {
    var response = await pinterest.boards.createBoard(data);
  } catch (error) {
    return;
  }
};

boardsRequest();
