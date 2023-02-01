"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("terms.getSuggested()", function () {
  it("It should get suggested terms", async function () {
    try {
      var query = {
        term: String(),
        limit: Number(),
      };
      var response = await pinterest.terms
        .getSuggested({ query })
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

describe("terms.getRelated()", function () {
  it("It should get related terms", async function () {
    try {
      var query = {
        terms: Array(String()),
      };
      var response = await pinterest.terms
        .getRelated({ query })
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
