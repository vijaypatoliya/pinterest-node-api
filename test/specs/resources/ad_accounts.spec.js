"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("ad_accounts.getAll()", function () {
  it("It should get all", async function () {
    try {
      var response = await pinterest.ad_accounts
        .getAll()
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

describe("ad_accounts.create()", function () {
  it("It should create", async function () {
    try {
      var response = await pinterest.ad_accounts
        .create()
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

describe("ad_accounts.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ad_accounts
        .get(ad_account_id)
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

describe("ad_accounts.getAnalytics()", function () {
  it("It should get analytics", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ad_accounts
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

describe("ad_accounts.getReport()", function () {
  it("It should get report", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ad_accounts
        .getReport(ad_account_id)
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

describe("ad_accounts.createReport()", function () {
  it("It should get report", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ad_accounts
        .createReport(ad_account_id)
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

describe("ad_accounts.getTargetedAnalytics()", function () {
  it("It should get targeted analytics", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ad_accounts
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