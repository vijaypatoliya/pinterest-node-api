'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * fields (id, name)
   */
  var data = {};
  try {
    var response = await pinterest.users.getUserFollowingInterests(data);
  } catch (error) {
    return;
  }
};

usersRequest();
