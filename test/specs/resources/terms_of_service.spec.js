"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

var base64Encoded = require("../data.json").base64Encoded;

describe("terms_of_service.get()", function () {
  it("It should get terms of services", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        include_html: Boolean(),
        tos_type: String(),
      };
      var response = await pinterest.terms_of_service
        .get(ad_account_id, { query })
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
