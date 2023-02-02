"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

var base64Encoded = require("../data.json").base64Encoded;

describe("resources.getAdAccountCountries()", function () {
  it("It should get ad account countries", async function () {
    try {
      var query = {
        report_type: String(),
      };
      var response = await pinterest.resources
        .getAdAccountCountries({ query })
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

describe("resources.getAvailableMetrics()", function () {
  it("It should get available metrics", async function () {
    try {
      var query = {
        report_type: String(),
      };
      var response = await pinterest.resources
        .getAvailableMetrics({ query })
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

describe("resources.getMetricsReadyState()", function () {
  it("It should get metrics ready state", async function () {
    try {
      var query = {
        date: String(),
      };
      var response = await pinterest.resources
        .getMetricsReadyState({ query })
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

describe("resources.getInterest()", function () {
  it("It should get interest", async function () {
    try {
      var interest_id = 12345;
      var response = await pinterest.resources
        .getInterest(interest_id)
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

describe("resources.getTargetingOptions()", function () {
  it("It should get targeting options", async function () {
    try {
      var targeting_type = "targeting_type";
      var response = await pinterest.resources
        .getTargetingOptions(targeting_type)
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
