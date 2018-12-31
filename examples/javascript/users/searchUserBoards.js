'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * query (board names)
   * 
   * (optional)
   * fields (counts, created_at, creator, description, id, image, name, privacy, reason, url)
   */
  var data = {
    query: 'board 1',
    fields: 'counts,id,name,url'
  };
  try {
    var response = await pinterest.users.searchUserBoards(data);
  } catch (error) {
    return;
  }
};

usersRequest();
