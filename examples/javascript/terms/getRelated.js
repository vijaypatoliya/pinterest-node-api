'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * GET RELATED TERMS
   *
   * Passing Path Parameters:
   * ------------------------
   * targeting_type
   * 
   * */

  var query = {
    terms: Array(String())
  }

  try {
    var response = await pinterest.terms.getRelated({ query });
   } catch (error) {
    return;
  }
};

usersRequest();
