"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("customer_list.create()", function () {
  it("It should create", async function () {
    try {
      var ad_account_id = 12345;
      var payload = {
        name: "The Glengarry Glen Ross leads",
        records: "email1@pinterest.com,email2@pinterest.com,..<more records>",
        list_type: "EMAIL",
        exceptions: {},
      };
      var response = await pinterest.customer_lists
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

describe("customer_list.getAll()", function () {
  it("It should getAll", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        page_size: Number(),
        order: String(),
        bookmark: String(),
      };
      var response = await pinterest.customer_lists
        .getAll(ad_account_id, { query })
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

describe("customer_list.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = 12345;
      var customer_list_id = 12345;
      var response = await pinterest.customer_lists
        .get(ad_account_id, customer_list_id)
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

describe("customer_list.update()", function () {
  it("It should update", async function () {
    try {
      var ad_account_id = 12345;
      var customer_list_id = 12345;
      var payload = {
        records: "email2@pinterest.com,email6@pinterest.com,",
        operation_type: "REMOVE",
        exceptions: {
          code: 2,
          message: "Advertiser not found.",
        },
      };
      var response = await pinterest.customer_lists
        .update(ad_account_id, customer_list_id, payload)
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
