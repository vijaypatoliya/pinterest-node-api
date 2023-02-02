"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /** GET ALL MEDIA  */

  var query = {
    bookmark: String(),
    page_size: Number(),
  };

  try {
    var response = await pinterest.media.getAll({ query });
} catch (error) {
    return;
  }
};

pinsRequest();
