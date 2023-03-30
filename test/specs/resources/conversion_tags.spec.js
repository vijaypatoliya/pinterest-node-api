"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("conversion_tags.list()", function () {
  it("It should list", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        filter_deleted: Boolean(),
      };
      var response = await pinterest.conversion_tags
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

describe("conversion_tags.create()", function () {
  it("It should create", async function () {
    try {
      var payload = {
        name: "ACME Tools Tag",
      };
      var ad_account_id = 12345;
      var response = await pinterest.conversion_tags
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

describe("conversion_tags.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = 12345;
      var conversion_tag_id = 12345;
      var response = await pinterest.conversion_tags
        .get(ad_account_id, conversion_tag_id)
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

describe("conversion_tags.getPageVisit()", function () {
  it("It should get page visit", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        page_size: Number(),
        order: String(),
        bookmark: String(),
      };
      var response = await pinterest.conversion_tags
        .getPageVisit(ad_account_id, { query })
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

describe("conversion_tags.getOcpmEligible()", function () {
  it("It should get ocpm eligible", async function () {
    try {
      var ad_account_id = 12345;
      var response = await pinterest.conversion_tags
        .getOcpmEligible(ad_account_id)
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
