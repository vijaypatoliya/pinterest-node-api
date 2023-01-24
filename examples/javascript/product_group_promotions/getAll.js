'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * (optional)
   * fields (account_type, bio, counts, created_at, first_name, id, image, last_name, url, username)
   */
  var data = {};
  try {
    var response = await pinterest.users.getUserOwnInfo(data);
    console.log(response)
  } catch (error) {
    console.log('error', error)
    return;
  }
};

usersRequest();
