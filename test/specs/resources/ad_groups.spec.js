"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("ad_groups.getTargetedAnalytics()", function () {
  it("It should get targeted analytics", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        ad_group_ids: Array(String()),
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
      var response = await pinterest.ad_groups
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

describe("ad_groups.list()", function () {
  it("It should get all", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        campaign_ids: Array(String()),
        ad_group_ids: Array(String()),
        entity_statuses: Array(String()),
        page_size: Number(),
        order: String(),
        bookmark: String(),
        translate_interests_to_names: Boolean(),
      };
      var response = await pinterest.ad_groups
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

describe("ad_groups.create()", function () {
  it("It should create", async function () {
    try {
      var payload = [
        {
          name: "Ad Group For Pin: 687195905986",
          status: "ACTIVE",
          budget_in_micro_currency: 5000000,
          bid_in_micro_currency: 5000000,
          bid_strategy_type: "AUTOMATIC_BID",
          optimization_goal_metadata: {
            conversion_tag_v3_goal_metadata: {
              attribution_windows: {
                click_window_days: 0,
                engagement_window_days: 0,
                view_window_days: 0,
              },
              conversion_event: "PAGE_VISIT",
              conversion_tag_id: "string",
              cpa_goal_value_in_micro_currency: "string",
              is_roas_optimized: true,
              learning_mode_type: "ACTIVE",
            },
            frequency_goal_metadata: {
              frequency: 0,
              timerange: "DAY",
            },
            scrollup_goal_metadata: {
              scrollup_goal_value_in_micro_currency: "string",
            },
          },
          budget_type: "DAILY",
          start_time: 5686848000,
          end_time: 5705424000,
          targeting_spec: {
            property1: ["string"],
            property2: ["string"],
            AGE_BUCKET: ["35-44", "50-54"],
            APPTYPE: ["ipad", "iphone"],
            AUDIENCE_EXCLUDE: ["string"],
            "AUDIENCE_INCLUDE'": ["string"],
            GENDER: ["unknown"],
            GEO: ["string"],
            INTEREST: ["string"],
            LOCALE: ["string"],
            LOCATION: ["string"],
            SHOPPING_RETARGETING: [
              {
                lookback_window: 0,
                tag_types: [0],
                exclusion_window: 0,
              },
            ],
            TARGETING_STRATEGY: ["CHOOSE_YOUR_OWN"],
          },
          lifetime_frequency_cap: 100,
          tracking_urls: {
            impression: ["URL1", "URL2"],
            click: ["URL1", "URL2"],
            engagement: ["URL1", "URL2"],
            buyable_button: ["URL1", "URL2"],
            audience_verification: ["URL1", "URL2"],
          },
          auto_targeting_enabled: true,
          placement_group: "ALL",
          pacing_delivery_type: "STANDARD",
          campaign_id: "626736533506",
          billable_event: "CLICKTHROUGH",
        },
      ];
      var ad_account_id = 12345;
      var response = await pinterest.ad_groups
        .create(ad_account_id, payload)
        .catch((error) => {
          if (error) {
            
            return;
          }
        });
      
      // expect(response).to.be.a("object");
 } catch (error) {
      
      // expect(response).to.be.a(undefined);
    }
  });
});

describe("ad_groups.update()", function () {
  it("It should update", async function () {
    try {
      var payload = [
        {
          name: "Ad Group For Pin: 687195905986",
          status: "ACTIVE",
          budget_in_micro_currency: 5000000,
          bid_in_micro_currency: 5000000,
          bid_strategy_type: "AUTOMATIC_BID",
          optimization_goal_metadata: {
            conversion_tag_v3_goal_metadata: {
              attribution_windows: {
                click_window_days: 0,
                engagement_window_days: 0,
                view_window_days: 0,
              },
              conversion_event: "PAGE_VISIT",
              conversion_tag_id: "string",
              cpa_goal_value_in_micro_currency: "string",
              is_roas_optimized: true,
              learning_mode_type: "ACTIVE",
            },
            frequency_goal_metadata: {
              frequency: 0,
              timerange: "DAY",
            },
            scrollup_goal_metadata: {
              scrollup_goal_value_in_micro_currency: "string",
            },
          },
          budget_type: "DAILY",
          start_time: 5686848000,
          end_time: 5705424000,
          targeting_spec: {
            property1: ["string"],
            property2: ["string"],
          },
          lifetime_frequency_cap: 100,
          tracking_urls: {
            impression: ["URL1", "URL2"],
            click: ["URL1", "URL2"],
            engagement: ["URL1", "URL2"],
            buyable_button: ["URL1", "URL2"],
            audience_verification: ["URL1", "URL2"],
          },
          auto_targeting_enabled: true,
          placement_group: "ALL",
          pacing_delivery_type: "STANDARD",
          campaign_id: "626736533506",
          billable_event: "CLICKTHROUGH",
          id: "2680060704746",
        },
      ];
      var ad_account_id = 12345;
      var response = await pinterest.ad_groups
        .update(ad_account_id, payload)
        .catch((error) => {
          if (error) {
            
            return;
          }
        });
      
      // expect(response).to.be.a("object");
 } catch (error) {
      
      // expect(response).to.be.a(undefined);
    }
  });
});

describe("ad_groups.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = 12345;
      var ad_group_id = 12345;
      var response = await pinterest.ad_groups
        .get(ad_account_id, ad_group_id)
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

describe("ad_groups.getAnalytics()", function () {
  it("It should get analytics", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        start_date: String(Date()),
        end_date: String(Date()),
        ad_group_ids: Array(String()),
        columns: Array(String()),
        granularity: Array(String()),
        click_window_days: Number(),
        engagement_window_days: Number(),
        view_window_days: Number(),
        conversion_report_time: String(),
      };
      var response = await pinterest.ad_groups
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

describe("ad_groups.getBidFloors()", function () {
  it("It should get bid floors", async function () {
    try {
      var ad_account_id = 12345;
      var payload = {
        targeting_spec: {
          GEO: ["BE-VOV"],
          LOCATION: ["US"],
          LOCALE: ["cs"],
          AGE_BUCKET: ["25-34"],
          AUDIENCE_INCLUDE: ["2542620905473"],
          SHOPPING_RETARGETING: [
            {
              lookback_window: 30,
              exclusion_window: 14,
              tag_types: [0, 6],
            },
            {
              lookback_window: 30,
              exclusion_window: 14,
              tag_types: [0, 6],
            },
          ],
          GENDER: ["male"],
          TARGETING_STRATEGY: ["CHOOSE_YOUR_OWN"],
          APPTYPE: ["iphone"],
          AUDIENCE_EXCLUDE: ["2542620905475"],
          INTEREST: ["925056443165"],
        },
        bid_floor_specs: [
          {
            billable_event: "CLICKTHROUGH",
            creative_type: "REGULAR",
            currency: "USD",
            countries: ["US", "US"],
            optimization_goal_metadata: {
              frequency_goal_metadata: {
                timerange: "DAY",
                frequency: 5,
              },
              conversion_tag_v3_goal_metadata: {
                attribution_windows: {
                  view_window_days: 1,
                  click_window_days: 0,
                  engagement_window_days: 6,
                },
                conversion_tag_id: "123456789",
                learning_mode_type: "ACTIVE",
                conversion_event: "PAGE_VISIT",
                is_roas_optimized: true,
                cpa_goal_value_in_micro_currency: "123456789",
              },
              scrollup_goal_metadata: {
                scrollup_goal_value_in_micro_currency: "123456789",
              },
            },
          },
          {
            billable_event: "CLICKTHROUGH",
            creative_type: "REGULAR",
            currency: "USD",
            countries: ["US", "US"],
            optimization_goal_metadata: {
              frequency_goal_metadata: {
                timerange: "DAY",
                frequency: 5,
              },
              conversion_tag_v3_goal_metadata: {
                attribution_windows: {
                  view_window_days: 1,
                  click_window_days: 0,
                  engagement_window_days: 6,
                },
                conversion_tag_id: "123456789",
                learning_mode_type: "ACTIVE",
                conversion_event: "PAGE_VISIT",
                is_roas_optimized: true,
                cpa_goal_value_in_micro_currency: "123456789",
              },
              scrollup_goal_metadata: {
                scrollup_goal_value_in_micro_currency: "123456789",
              },
            },
          },
        ],
      };
      var response = await pinterest.ad_groups
        .getBidFloors(ad_account_id, payload)
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
