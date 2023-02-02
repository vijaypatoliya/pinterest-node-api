"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("conversion_events.send()", function () {
  it("It should send", async function () {
    try {
      var ad_account_id = 12345;
      var payload = {
        data: [
          {
            event_name: "checkout",
            action_source: "app_ios",
            event_time: 1451431341,
            event_id: "eventId0001",
            event_source_url: "https://example.org/",
            opt_out: false,
            partner_name: "string",
            user_data: {
              em: ["string"],
            },
            custom_data: {
              currency: "USD",
              value: "425325.89",
              content_ids: ["string"],
              contents: [
                {
                  item_price: "1325.12",
                  quantity: 0,
                },
              ],
              num_items: 0,
              order_id: "string",
              search_string: "string",
              opt_out_type: "LDP",
              np: "string",
            },
            app_id: "string",
            app_name: "string",
            app_version: "string",
            device_brand: "string",
            device_carrier: "string",
            device_model: "string",
            device_type: "string",
            os_version: "string",
            wifi: false,
            language: "en",
          },
        ],
      };

      var query = {
        test: Boolean(),
      };
      var response = await pinterest.conversion_events
        .send(ad_account_id, { query }, payload)
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
