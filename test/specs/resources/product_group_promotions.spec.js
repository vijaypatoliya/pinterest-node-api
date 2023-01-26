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
      var ad_account_id = "";
      var response = await pinterest.product_group_promotions
        .getAnalytics(ad_account_id)
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

describe("product_group_promotions.create()", function () {
  it("It should create", async function () {
    try {
      var ad_account_id = "";
      var response = await pinterest.product_group_promotions
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

describe("product_group_promotions.update()", function () {
  it("It should update", async function () {
    try {
      var ad_account_id = "";
      var response = await pinterest.product_group_promotions
        .update(ad_account_id)
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

describe("product_group_promotions.getAll()", function () {
  it("It should getAll", async function () {
    try {
      var ad_account_id = "";
      var response = await pinterest.product_group_promotions
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

describe("product_group_promotions.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = "";
      var product_group_promotion_id = "";
      var response = await pinterest.product_group_promotions
        .get(ad_account_id, product_group_promotion_id)
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
