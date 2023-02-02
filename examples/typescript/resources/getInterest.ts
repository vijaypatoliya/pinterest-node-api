"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var usersRequest = async function () {
  /**
   * GET INTEREST
   * 
   * Passing Path Parameters:
   * ------------------------
   * interest_id
   * 
   * */

  var interest_id = 12345;

  try {
    var response = await pinterest.resources.getInterest(interest_id);
   } catch (error) {
    return;
  }
};

usersRequest();
