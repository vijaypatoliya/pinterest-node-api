'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * GET MEDIA
   * 
   * Passing Path Parameters:
   * ------------------------
   * media_id
   * 
   * */
  var media_id = 12345;

  try {
    var response = await pinterest.media.get(media_id);
} catch (error) {
    return;
  }
};

pinsRequest();
