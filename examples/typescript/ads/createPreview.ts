"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  try {
    var ad_account_id = 12345;
    var createFromImg = {
      image_url: "https://somewebsite.com/someimage.jpg",
      title: "My Preview Image",
    };

    var createFromPin = {
      pin_id: "7389479023",
    };

    var createFromImgResponse = await pinterest.ads.createPreview(ad_account_id, createFromImg);
    var createFromPinResponse = await pinterest.ads.createPreview(ad_account_id, createFromPin);
  } catch (error) {
    return;
  }
};

pinsRequest();
