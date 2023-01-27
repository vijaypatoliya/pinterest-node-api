"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("campaigns.getAll()", function () {
  it("It should get all", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.campaigns
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

describe("campaigns.create()", function () {
  it("It should create", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.campaigns
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

describe("campaigns.update()", function () {
  it("It should update", async function () {
    try {
      var ad_account_id = "";
      var response = await pinterest.campaigns
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

describe("campaigns.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = "";
      var campaign_id = "";
      var response = await pinterest.campaigns
        .get(ad_account_id, campaign_id)
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

describe("campaigns.getAnalytics()", function () {
  it("It should get analytics", async function () {
    try {
      var ad_account_id = "";
      var response = await pinterest.campaigns
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

describe("campaigns.getTargetedAnalytics()", function () {
  it("It should get targeted analytics", async function () {
    try {
      var ad_account_id = "";
      var response = await pinterest.campaigns
        .getTargetedAnalytics(ad_account_id)
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
