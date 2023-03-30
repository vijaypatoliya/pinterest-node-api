"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("campaigns.list()", function () {
  it("It should get all", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        campaign_ids: Array(String()),
        entity_statuses: Array(String()),
        page_size: Number(),
        order: String(),
        bookmark: String(),
      };
      var response = await pinterest.campaigns
        .list(ad_account_id, { query })
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

describe("campaigns.create()", function () {
  it("It should create", async function () {
    try {
      var payload = [
        {
          ad_account_id: "549755885175",
          name: "ACME Tools",
          status: "ACTIVE",
          lifetime_spend_cap: 1432744744,
          daily_spend_cap: 1432744744,
          order_line_id: "549755885175",
          tracking_urls: {
            impression: ["URL1", "URL2"],
            click: ["URL1", "URL2"],
            engagement: ["URL1", "URL2"],
            buyable_button: ["URL1", "URL2"],
            audience_verification: ["URL1", "URL2"],
          },
          start_time: 1580865126,
          end_time: 1644023526,
          summary_status: "RUNNING",
          is_campaign_budget_optimization: true,
          is_flexible_daily_budgets: true,
          default_ad_group_budget_in_micro_currency: 0,
          is_automated_campaign: true,
          objective_type: "AWARENESS",
        },
      ];
      var ad_account_id = 12345;
      var response = await pinterest.campaigns
        .create(ad_account_id, payload)
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

describe("campaigns.update()", function () {
  it("It should update", async function () {
    try {
      var ad_account_id = 12345;
      var payload = [
        {
          id: "549755885175",
          ad_account_id: "549755885175",
          name: "ACME Tools",
          status: "ACTIVE",
          lifetime_spend_cap: 1432744744,
          daily_spend_cap: 1432744744,
          order_line_id: "549755885175",
          tracking_urls: {
            impression: ["URL1", "URL2"],
            click: ["URL1", "URL2"],
            engagement: ["URL1", "URL2"],
            buyable_button: ["URL1", "URL2"],
            audience_verification: ["URL1", "URL2"],
          },
          start_time: 1580865126,
          end_time: 1644023526,
          summary_status: "RUNNING",
          is_campaign_budget_optimization: true,
          is_flexible_daily_budgets: true,
          default_ad_group_budget_in_micro_currency: 0,
          is_automated_campaign: true,
        },
      ];
      var response = await pinterest.campaigns
        .update(ad_account_id, payload)
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

describe("campaigns.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = 12345;
      var campaign_id = 12345;
      var response = await pinterest.campaigns
        .get(ad_account_id, campaign_id)
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

describe("campaigns.getAnalytics()", function () {
  it("It should get analytics", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        start_date: String(Date()),
        end_date: String(Date()),
        campaign_ids: Array(String()),
        columns: Array(String()),
        granularity: String(),
        click_window_days: Number(),
        engagement_window_days: Number(),
        view_window_days: Number(),
        conversion_report_time: String(),
      };
      var response = await pinterest.campaigns
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

describe("campaigns.getTargetedAnalytics()", function () {
  it("It should get targeted analytics", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        campaign_ids: Array(String()),
        start_Date: String(Date()),
        end_Date: String(Date()),
        targeting_types: Array(String()),
        columns: Array(String()),
        granularity: String(),
        click_window_days: Number(),
        engagement_window_days: Number(),
        view_window_days: Number(),
        conversion_report_time: String(),
        attribution_types: String(),
      };
      var response = await pinterest.campaigns
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
