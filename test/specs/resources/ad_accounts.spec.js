"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("ad_accounts.getAll()", function () {
  it("It should get all", async function () {
    try {
      var query = {
        bookmark: String(),
        page_size: Number(),
        include_shared_accounts: Boolean(),
      };
      var response = await pinterest.ad_accounts
        .getAll({ query })
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

describe("ad_accounts.create()", function () {
  it("It should create", async function () {
    try {
      var payload = {
        country: "US",
        owner_user_id: "383791336903426391",
        name: "ACME Tools",
      };
      var response = await pinterest.ad_accounts
        .create(payload)
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

describe("ad_accounts.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = 12345;
      var response = await pinterest.ad_accounts
        .get(ad_account_id)
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

describe("ad_accounts.getAnalytics()", function () {
  it("It should get analytics", async function () {
    try {
      var query = {
        start_date: String(Date()),
        end_date: String(Date()),
        columns: Array(String()),
        granularity: String(),
        click_window_days: Number(),
        engagement_window_days: Number(),
        view_window_days: Number(),
        conversion_report_time: String(),
      };
      var ad_account_id = 12345;
      var response = await pinterest.ad_accounts
        .getAnalytics(ad_account_id, { query })
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

describe("ad_accounts.getReport()", function () {
  it("It should get report", async function () {
    try {
      var ad_account_id = 12345;
      var query = { token: String() };
      var response = await pinterest.ad_accounts
        .getReport(ad_account_id, { query })
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

describe("ad_accounts.createReport()", function () {
  it("It should create report", async function () {
    try {
      var payload = {
        start_date: "2020-12-20",
        end_date: "2020-12-20",
        granularity: "TOTAL",
        click_window_days: 1,
        engagement_window_days: 1,
        view_window_days: 1,
        conversion_report_time: "TIME_OF_AD_ACTION",
        attribution_types: ["INDIVIDUAL"],
        campaign_ids: ["12345678"],
        campaign_statuses: ["RUNNING", "PAUSED"],
        campaign_objective_types: ["AWARENESS", "VIDEO_VIEW"],
        ad_group_ids: ["12345678"],
        ad_group_statuses: ["RUNNING", "PAUSED"],
        ad_ids: ["12345678"],
        ad_statuses: ["APPROVED", "PAUSED"],
        product_group_ids: ["12345678"],
        product_group_statuses: ["RUNNING", "PAUSED"],
        product_item_ids: ["12345678"],
        targeting_types: ["APPTYPE"],
        metrics_filters: [{}],
        columns: ["SPEND_IN_MICRO_DOLLAR"],
        level: "CAMPAIGN",
        report_format: "JSON",
      };
      var ad_account_id = 12345;
      var response = await pinterest.ad_accounts
        .createReport(ad_account_id, payload)
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

describe("ad_accounts.getTargetedAnalytics()", function () {
  it("It should get targeted analytics", async function () {
    try {
      var query = {
        start_date: String(Date()),
        end_date: String(Date()),
        targeting_types: Array(String()),
        columns: Array(String()),
        granularity: String(),
        click_window_days: Number(),
        engagement_window_days: Number(),
        view_window_days: Number(),
        conversion_report_time: String(),
        attribution_types: String(),
      };
      var ad_account_id = 12345;
      var response = await pinterest.ad_accounts
        .getTargetedAnalytics(ad_account_id, { query })
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
