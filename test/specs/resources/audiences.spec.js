"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("audiences.list()", function () {
  it("It should get all", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        bookmark: String(),
        order: String(),
        page_size: Number(),
      };

      var response = await pinterest.audiences
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

describe("audiences.create()", function () {
  it("It should create", async function () {
    try {
      var ad_account_id = 12345;
      var payload = {
        ad_account_id: "549755885175",
        name: "string",
        rule: {
          country: "US",
          customer_list_id: "5497558859876",
          engagement_domain: ["www.somedomain.com"],
          engagement_type: "click",
          event: "checkout",
          event_data: {
            currency: "USD",
            lead_type: "Newsletter",
            line_items: {
              product_brand: "Parker",
              product_category: "Shoes",
              product_id: 1414,
              product_name: "Parker Boots",
              product_price: "99.99",
              product_quantity: 2,
              product_variant: "Red",
              product_variant_id: "1414-34832",
            },
            order_id: "X-151481",
            order_quantity: 1,
            page_name: "Our Favorite Pins on Pinterest.",
            promo_code: "WINTER10",
            property: "Athleta",
            search_query: "boots",
            value: "199.98",
            video_title: "How to style your Parker Boots",
          },
          percentage: 30,
          pin_id: ["34567"],
          prefill: true,
          retention_days: 30,
          seed_id: ["2542620639259", "2542620639261"],
          url: ["string"],
          visitor_source_id: "549755885175",
          event_source: {
            "=": ["web", "mobile"],
          },
          ingestion_source: {
            "=": ["tag"],
          },
          engager_type: 1,
          campaign_id: ["626744528398"],
          ad_id: ["687201361754"],
          objective_type: ["AWARENESS"],
          ad_account_id: "549755885175",
        },
        description: "string",
        audience_type: "string",
      };
      var response = await pinterest.audiences
        .create(ad_account_id, payload)
        .catch((error) => {
          if (error) {
            
            return;
          }
        });
      
      // expect(response).to.be.a("object");
 } catch (error) {
      
      // expect(response).to.be.a(undefined);
    }
  });
});

describe("audiences.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = 12345;
      var audience_id = 12345;

      var response = await pinterest.audiences
        .get(ad_account_id, audience_id)
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

describe("audiences.update()", function () {
  it("It should update", async function () {
    try {
      var ad_account_id = 12345;
      var audience_id = 12345;
      var response = await pinterest.audiences
        .update(ad_account_id, audience_id)
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
