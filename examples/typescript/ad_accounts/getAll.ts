"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /** GET ALL AD ACCOUNT */

  var query = {
    bookmark: String(),
    page_size:Number(),
    include_shared_accounts:Boolean()
  }

  try {
    var response = await pinterest.ad_accounts.list({ query })
   } catch (error) {
    return;
  }
};

pinsRequest();
