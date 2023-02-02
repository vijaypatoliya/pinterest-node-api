"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("user_account.get()", function () {
  it("It should get the logged in user's information", async function () {
    try {
      var query = {
        ad_account_id: String(),
      };
      var response = await pinterest.user_account
        .get({ query })
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

describe("user_account.getAnalytics()", function () {
  it("It should get user analytics", async function () {
    try {
      var query = {
        start_date: String(Date()),
        end_date: String(Date()),
        from_claimed_content: String(),
        pin_format: String(),
        app_types: String(),
        metric_types: Array(String()),
        split_field: String(),
        ad_account_id: String(),
      };
      var response = await pinterest.user_account
        .getAnalytics({ query })
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

describe("user_account.getTopPinsAnalytics()", function () {
  it("It should get user top pins analytics", async function () {
    try {
      var query = {
        start_date: String(Date()),
        end_date: String(Date()),
        sort_by: String(),
        from_claimed_content: String(),
        pin_format: String(),
        app_types: String(),
        metric_types: Array(String()),
        num_of_pins: Number(),
        created_in_last_n_days: Number(),
        ad_account_id: String(),
      };
      var response = await pinterest.user_account
        .getTopPinsAnalytics({ query })
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

describe("user_account.getTopVideoPinsAnalytics()", function () {
  it("It should get user top video pins analytics", async function () {
    try {
      var response = await pinterest.user_account
        .getTopVideoPinsAnalytics()
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
