"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("customer_list.create()", function () {
  it("It should create", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.customer_list
        .create(ad_account_id)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("customer_list.getAll()", function () {
  it("It should getAll", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.customer_list
        .getAll(ad_account_id)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("customer_list.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = "", customer_list_id = "";
      var response = await pinterest.customer_list
        .get(ad_account_id, customer_list_id)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("customer_list.update()", function () {
  it("It should update", async function () {
    try {
      var ad_account_id = "", customer_list_id = "";
      var response = await pinterest.customer_list
        .update(ad_account_id, customer_list_id)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});
