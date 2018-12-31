'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * user (The username or user ID )
   */
  var user = '4teebeat'
  try {
    var response = await pinterest.users.unfollowUser(user);
  } catch (error) {
    return;
  }
};

usersRequest();
