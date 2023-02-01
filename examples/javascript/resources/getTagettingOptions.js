'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * GET SECTIONS
   *
   * Passing Path Parameters:
   * ------------------------
   *
   * targeting_type
   * */
  try {
    var targeting_type = 12345;
    var query = {
      client_id: String(),
      oauth_signature: String(),
      timestamp: String()
    }

    var response = await pinterest.resources.getTargetingOptions(targeting_type, { query });
    console.log(response);
  } catch (error) {
    console.log("error", error);
    return;
  }
};

usersRequest();
