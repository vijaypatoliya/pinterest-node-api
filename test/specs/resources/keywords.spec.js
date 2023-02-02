"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("keywords.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        campaign_id: String(),
        ad_group_id: String(),
        match_types: Array(String()),
        page_size: Number(),
        bookmark: String(),
      };
      var response = await pinterest.keywords
        .get(ad_account_id, { query })
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

describe("keywords.create()", function () {
  it("It should create", async function () {
    try {
      var payload = {
        keywords: [
          {
            bid: 200000,
            match_type: "BROAD",
            value: "string",
          },
        ],
        parent_id: "383791336903426391",
      };

      var ad_account_id = 12345;
      var response = await pinterest.keywords
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

describe("keywords.update()", function () {
  it("It should update", async function () {
    try {
      var payload = {
        keywords: [
          {
            id: "2886364308355",
            archived: false,
            bid: 200000,
          },
        ],
      };

      var ad_account_id = 12345;
      var response = await pinterest.keywords
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

describe("keywords.getCountryKeywordMetrics()", function () {
  it("It should get country keyword metrics", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        country_code: String(),
        keywords: Array(String()),
      };
      var response = await pinterest.keywords
        .getCountryKeywordMetrics(ad_account_id, { query })
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
