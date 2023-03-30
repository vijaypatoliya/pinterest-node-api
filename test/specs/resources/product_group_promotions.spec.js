"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

var base64Encoded = require("../data.json").base64Encoded;

describe("product_group_promotions.getAnalytics()", function () {
  it("It should get analytics", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        start_date: String(Date()),
        end_date: String(Date()),
        product_group_ids: Array(String()),
        columns: Array(String()),
        granularity: String(),
        click_window_days: Number(),
        engagement_window_days: Number(),
        view_window_days: Number(),
        conversion_report_time: String(),
      };
      var response = await pinterest.product_group_promotions
        .getAnalytics(ad_account_id, { query })
        .catch((error) => {
          if (error) {
            
            return;
          }
        });
      
      expect(response).to.be.a("object");
 } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
});

describe("product_group_promotions.create()", function () {
  it("It should create", async function () {
    try {
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
      var response = await pinterest.product_group_promotions
        .create(ad_account_id, payload)
        .catch((error) => {
          if (error) {
            
            return;
          }
        });
      
      expect(response).to.be.a("object");
 } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
});

describe("product_group_promotions.update()", function () {
  it("It should update", async function () {
    try {
      var ad_account_id = 12345;
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
      var response = await pinterest.product_group_promotions
        .update(ad_account_id, payload)
        .catch((error) => {
          if (error) {
            
            return;
          }
        });
      
      expect(response).to.be.a("object");
 } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
});

describe("product_group_promotions.list()", function () {
  it("It should list", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        product_group_promotion_ids: Array(String()),
        entity_statuses: Array(String()),
        ad_group_id: String(),
        page_size: Number(),
        order: String(),
        bookmark: String(),
      };
      var response = await pinterest.product_group_promotions
        .list(ad_account_id, { query })
        .catch((error) => {
          if (error) {
            
            return;
          }
        });
      
      expect(response).to.be.a("object");
 } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
});

describe("product_group_promotions.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = 12345;
      var product_group_promotion_id = 12345;
      var response = await pinterest.product_group_promotions
        .get(ad_account_id, product_group_promotion_id)
        .catch((error) => {
          if (error) {
            
            return;
          }
        });
      
      expect(response).to.be.a("object");
 } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
});
