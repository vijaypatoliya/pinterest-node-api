"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * CREATE ADS PREVIEW
   *
   * Passing Path Parameters:
   * ad_account_id: String
   *
   * */
  var ad_account_id = 12345;

  var createFromImgPayload = {
    image_url: "https://somewebsite.com/someimage.jpg",
    title: "My Preview Image",
  };

  var createFromPinPayload = {
    pin_id: "7389479023",
  };

  try {
    var createFromImgResponse = await pinterest.ads.createPreview(
      ad_account_id,
      createFromImgPayload
    );
    var createFromPinResponse = await pinterest.ads.createPreview(
      ad_account_id,
      createFromPinPayload
    );
} catch (error) {
    return;
  }
};

pinsRequest();
