"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("audience_insights.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        audience_insight_type: String(),
      };
      var response = await pinterest.audience_insights
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
