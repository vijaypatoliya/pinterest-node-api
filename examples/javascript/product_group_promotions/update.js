"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var usersRequest = async function () {
  var ad_account_id = String();
  var payload = {
    product_group_promotion: [
      {
        catalogs_product_group_id: "1234123",
        slideshow_collections_description: "Description",
        creative_type: "REGULAR",
        collections_hero_pin_id: "123123",
        catalogs_product_group_name: "ProductGroupName",
        collections_hero_destination_url: "http://www.pinterest.com",
        tracking_url: "https://www.pinterest.com",
        slideshow_collections_title: "Title",
        status: "ACTIVE",
        id: "2680059592705",
      },
      {
        catalogs_product_group_id: "1231231",
        slideshow_collections_description: "Other description",
        creative_type: "REGULAR",
        collections_hero_pin_id: "123124",
        catalogs_product_group_name: "ProductGroupName",
        collections_hero_destination_url: "http://www.pinterest.com",
        tracking_url: "https://www.pinterest.com",
        slideshow_collections_title: "Title",
        status: "ACTIVE",
        id: "2680059592706",
      },
    ],
    ad_group_id: "26823439592705",
  };
  try {
    var response = await pinterest.product_group_promotions.update(
      ad_account_id,
      payload
    );
    console.log(response);
  } catch (error) {
    console.log("error", error);
    return;
  }
};

usersRequest();
