"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("ads.getTargetedAnalytics()", function () {
  it("It should get targeted analytics", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ads
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

describe("ads.getAll()", function () {
  it("It should get all", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ads
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

describe("ads.create()", function () {
  it("It should create", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ads
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

describe("ads.update()", function () {
  it("It should update", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ads
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

describe("ads.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = ''
      var ad_id = ''
      var response = await pinterest.ads
        .get(ad_account_id, ad_id)
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

describe("ads.getAnalytics()", function () {
  it("It should get analytics", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ads
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

describe("ads.createPreview()", function () {
  it("It should create preview", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ads
        .createPreview(ad_account_id)
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