'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * user
   */
  var data = {
    user: '4teebeat'
  };
  try {
    var response = await pinterest.users.followUser(data);
  } catch (error) {
    return;
  }
};

usersRequest();
