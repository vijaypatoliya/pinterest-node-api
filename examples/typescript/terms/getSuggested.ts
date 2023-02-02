'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


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
