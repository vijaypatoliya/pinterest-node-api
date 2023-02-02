'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


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
