'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * fields (counts, created_at, creator, description, id, image, name, privacy, reason, url)
   */
  var data = {};
  try {
    var response = await pinterest.users.getUserFollowingBoards(data);
  } catch (error) {
    return;
  }
};

usersRequest();
