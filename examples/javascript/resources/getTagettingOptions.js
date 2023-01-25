'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  try {
    var targeting_type = 'targeting_type'
    var response = await pinterest.resources.getTargetingOptions(targeting_type);
    console.log(response);
  } catch (error) {
    console.log("error", error);
    return;
  }
};

usersRequest();
