"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

var base64Encoded = require("../data.json").base64Encoded;

describe("user_account.get()", function () {
  it("It should get the logged in user's information", async function () {
    try {
      var response = await pinterest.user_account.get(data).catch((error) => {
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

describe("user_account.getAnalytics()", function () {
  it("It should get user analytics", async function () {
    try {
      var response = await pinterest.user_account.getAnalytics().catch((error) => {
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

describe("user_account.getTopPinsAnalytics()", function () {
  it("It should get user top pins analytics", async function () {
    try {
      var response = await pinterest.user_account.getTopPinsAnalytics().catch((error) => {
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

describe("user_account.getTopVideoPinsAnalytics()", function () {
  it("It should get user top video pins analytics", async function () {
    try {
      var response = await pinterest.user_account.getTopVideoPinsAnalytics().catch((error) => {
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

describe("user_account.getTopVideoPinsAnalytics()", function () {
  it("It should get user top video pins analytics", async function () {
    try {
      var response = await pinterest.user_account.getTopVideoPinsAnalytics().catch((error) => {
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