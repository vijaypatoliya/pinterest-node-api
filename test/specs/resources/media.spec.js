"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("media.getAll()", function () {
  it("It should get all", async function () {
    try {
      var query = {
        bookmark: String(),
        page_size: Number(),
      };
      var response = await pinterest.media.getAll({ query }).catch((error) => {
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

describe("media.register()", function () {
  it("It should register", async function () {
    try {
      var payload = {
        media_type: String(),
      };
      var response = await pinterest.media.register(payload).catch((error) => {
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

describe("media.get()", function () {
  it("It should get", async function () {
    try {
      var media_id = 12345;
      var response = await pinterest.media.get(media_id).catch((error) => {
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
