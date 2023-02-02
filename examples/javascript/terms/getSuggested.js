'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * GET SUGGESTED TERMS
   *
   * Passing Path Parameters:
   * ------------------------
   *
   * targeting_type
   * */

  var query = {
    term: String(),
    limit: Number()
  }

  try {
    var response = await pinterest.terms.getSuggested({ query });
   } catch (error) {
    return;
  }
};

usersRequest();
