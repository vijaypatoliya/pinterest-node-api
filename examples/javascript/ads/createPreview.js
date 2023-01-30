"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  try {
    var ad_account_id = String();
    var createFromImgPayload = {
      image_url: "https://somewebsite.com/someimage.jpg",
      title: "My Preview Image",
    };

    var createFromPinPayload = {
      pin_id: "7389479023",
    };

    var createFromImgResponse = await pinterest.ads.createPreview(ad_account_id, createFromImgPayload);
    var createFromPinResponse = await pinterest.ads.createPreview(ad_account_id, createFromPinPayload);
  } catch (error) {
    return;
  }
};

pinsRequest();
