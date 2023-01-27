"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("bulk.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.bulk
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

describe("bulk.upsert()", function () {
  it("It should upsert", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.bulk
        .upsert(ad_account_id)
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

describe("bulk.download()", function () {
  it("It should download", async function () {
    try {
      var ad_account_id = "";
      var bulk_request_id = "";
      var response = await pinterest.bulk
        .download(ad_account_id, bulk_request_id)
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
