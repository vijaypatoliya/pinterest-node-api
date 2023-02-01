"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var usersRequest = async function () {
  /**
   * GET SECTIONS
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * ad_account_id
   * */
  var ad_account_id = 12345;
  var payload = {
    product_group_promotion: [
      {
        slideshow_collections_description: "Description",
        creative_type: "REGULAR",
        collections_hero_pin_id: "123123",
        catalogs_product_group_name: "catalogProductGroupName",
        collections_hero_destination_url: "http://www.pinterest.com",
        tracking_url: "https://www.pinterest.com",
        slideshow_collections_title: "Title",
        is_mdl: true,
        status: "ACTIVE",
      },
      {
        slideshow_collections_description: "Description",
        creative_type: "REGULAR",
        collections_hero_pin_id: "123123",
        catalogs_product_group_name: "catalogProductGroupName",
        collections_hero_destination_url: "http://www.pinterest.com",
        tracking_url: "https://www.pinterest.com",
        slideshow_collections_title: "Title",
        is_mdl: true,
        status: "ACTIVE",
      },
    ],
    ad_group_id: "2680059592705",
  };

  try {
    var response = await pinterest.product_group_promotions.create(ad_account_id, payload);
    console.log(response);
  } catch (error) {
    console.log("error", error);
    return;
  }
};

usersRequest();
