'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  try {
    var query = {
      report_type: String()
    }
    var response = await pinterest.resources.getAvailableMetrics(query);
    console.log(response)
  } catch (error) {
    console.log('error', error)
    return;
  }
};

usersRequest();
