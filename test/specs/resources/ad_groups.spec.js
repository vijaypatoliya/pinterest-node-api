"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("ad_groups.getTargetedAnalytics()", function () {
  it("It should get targeted analytics", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ad_groups
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

describe("ad_groups.getAll()", function () {
  it("It should get all", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ad_groups
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

describe("ad_groups.create()", function () {
  it("It should create", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ad_groups
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

describe("ad_groups.update()", function () {
  it("It should update", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ad_groups
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

describe("ad_groups.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = ''
      var ad_group_id = ''
      var response = await pinterest.ad_groups
        .get(ad_account_id, ad_group_id)
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

describe("ad_groups.getAnalytics()", function () {
  it("It should get analytics", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ad_groups
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

describe("ad_groups.getBidFloors()", function () {
  it("It should get bid floors", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.ad_groups
        .getBidFloors(ad_account_id)
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