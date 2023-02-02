"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("pins.create()", function () {
  it("It should create", async function () {
    try {
      var payload = {
        link: "https://www.pinterest.com/",
        title: "string",
        description: "string",
        dominant_color: "#6E7874",
        alt_text: "string",
        board_id: "string",
        board_section_id: "string",
        media_source: {
          source_type: "image_base64",
          content_type: "image/jpeg",
          data: "string",
        },
        parent_pin_id: "string",
      };
      var response = await pinterest.pins.create(payload).catch((error) => {
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

describe("pins.get()", function () {
  it("It should get", async function () {
    try {
      var pin_id = 12345;
      var response = await pinterest.pins.get(pin_id).catch((error) => {
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

describe("pins.delete()", function () {
  it("It should delete", async function () {
    try {
      var pin_id = 12345;
      var response = await pinterest.pins.delete(pin_id).catch((error) => {
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

describe("pins.save()", function () {
  it("It should save", async function () {
    try {
      var pin_id = 12345;
      var payload = {
        board_id: "string",
        board_section_id: "string",
      };
      var response = await pinterest.pins
        .save(pin_id, payload)
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

describe("pins.getAnalytics()", function () {
  it("It should get analytics", async function () {
    try {
      var pin_id = 12345;
      var query = {
        start_date: String(Date()),
        end_date: String(Date()),
        app_types: String(),
        app_types: String(),
        metric_types: Array(String()) || String(),
        split_field: String(),
        ad_account_id: String(),
      };
      var response = await pinterest.pins
        .getAnalytics(pin_id, { query })
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
