"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  try {
    var ad_account_id = 12345;
    var data = [
      {
        ad_group_id: "2680059592705",
        android_deep_link: "string",
        carousel_android_deep_links: ["string"],
        carousel_destination_urls: ["string"],
        carousel_ios_deep_links: ["string"],
        click_tracking_url: "string",
        creative_type: "REGULAR",
        destination_url: "string",
        ios_deep_link: "string",
        is_pin_deleted: false,
        is_removable: false,
        name: "string",
        status: "ACTIVE",
        tracking_urls: {
          impression: ["URL1", "URL2"],
          click: ["URL1", "URL2"],
          engagement: ["URL1", "URL2"],
          buyable_button: ["URL1", "URL2"],
          audience_verification: ["URL1", "URL2"],
        },
        view_tracking_url: "string",
        pin_id: "394205773611545468",
      },
    ];
    var response = await pinterest.ads.create(ad_account_id, data);
  } catch (error) {
    return;
  }
};

pinsRequest();
