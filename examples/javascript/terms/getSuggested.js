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
    var query = {
      term: String(),
      limit: Number()
    }
    var response = await pinterest.terms.getSuggested({ query });
    console.log(response)
  } catch (error) {
    console.log('error', error)
    return;
  }
};

usersRequest();
