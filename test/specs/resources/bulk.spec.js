"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("bulk.get()", function () {
  it("It should get", async function () {
    try {
      var payload = {
        entity_types: ["CAMPAIGN", "AD_GROUP"],
        entity_ids: ["string"],
        updated_since: "1622848072",
        campaign_filter: {
          start_time: "1622848072",
          end_time: "1622848072",
          name: "campaign name",
          campaign_status: ["RUNNING"],
          objective_type: ["AWARENESS"],
        },
        output_format: "CSV",
      };
      var ad_account_id = String();
      var response = await pinterest.bulk
        .get(ad_account_id, payload)
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
      var payload = {
        create: {
          campaigns: [
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
          ],
          ad_groups: [
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
          ],
          ads: [
            {
              ad_group_id: "2680059592705",
              android_deep_link: "string",
              carousel_android_deep_links: ["string"],
              carousel_destination_urls: ["string"],
              carousel_ios_deep_links: ["string"],
              click_tracking_url: "string",
              creative_type: "REGULAR",
              destination_url: "string",
              ios_deep_link: "string",
              is_pin_deleted: false,
              is_removable: false,
              name: "string",
              status: "ACTIVE",
              tracking_urls: {
                impression: ["URL1", "URL2"],
                click: ["URL1", "URL2"],
                engagement: ["URL1", "URL2"],
                buyable_button: ["URL1", "URL2"],
                audience_verification: ["URL1", "URL2"],
              },
              view_tracking_url: "string",
              pin_id: "394205773611545468",
            },
          ],
          product_groups: [
            {
              product_group_promotion: [
                {
                  slideshow_collections_description: "Description",
                  creative_type: "REGULAR",
                  collections_hero_pin_id: "123123",
                  catalogs_product_group_name: "catalogProductGroupName",
                  collections_hero_destination_url: "http://www.pinterest.com",
                  tracking_url: "https://www.pinterest.com",
                  slideshow_collections_title: "Title",
                  is_mdl: true,
                  status: "ACTIVE",
                },
                {
                  slideshow_collections_description: "Description",
                  creative_type: "REGULAR",
                  collections_hero_pin_id: "123123",
                  catalogs_product_group_name: "catalogProductGroupName",
                  collections_hero_destination_url: "http://www.pinterest.com",
                  tracking_url: "https://www.pinterest.com",
                  slideshow_collections_title: "Title",
                  is_mdl: true,
                  status: "ACTIVE",
                },
              ],
              ad_group_id: "2680059592705",
            },
          ],
          keywords: [
            {
              keywords: [
                {
                  bid: 200000,
                  match_type: "BROAD",
                  value: "string",
                },
              ],
              parent_id: "383791336903426391",
            },
          ],
        },
        update: {
          campaigns: [
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
          ],
          ad_groups: [
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
          ],
          ads: [
            {
              ad_group_id: "2680059592705",
              android_deep_link: "string",
              carousel_android_deep_links: ["string"],
              carousel_destination_urls: ["string"],
              carousel_ios_deep_links: ["string"],
              click_tracking_url: "string",
              creative_type: "REGULAR",
              destination_url: "string",
              ios_deep_link: "string",
              is_pin_deleted: false,
              is_removable: false,
              name: "string",
              status: "ACTIVE",
              tracking_urls: {
                impression: ["URL1", "URL2"],
                click: ["URL1", "URL2"],
                engagement: ["URL1", "URL2"],
                buyable_button: ["URL1", "URL2"],
                audience_verification: ["URL1", "URL2"],
              },
              view_tracking_url: "string",
              id: "687195134316",
            },
          ],
          product_groups: [
            {
              product_group_promotion: [
                {
                  catalogs_product_group_id: "1234123",
                  slideshow_collections_description: "Description",
                  creative_type: "REGULAR",
                  collections_hero_pin_id: "123123",
                  catalogs_product_group_name: "ProductGroupName",
                  collections_hero_destination_url: "http://www.pinterest.com",
                  tracking_url: "https://www.pinterest.com",
                  slideshow_collections_title: "Title",
                  status: "ACTIVE",
                  id: "2680059592705",
                },
                {
                  catalogs_product_group_id: "1231231",
                  slideshow_collections_description: "Other description",
                  creative_type: "REGULAR",
                  collections_hero_pin_id: "123124",
                  catalogs_product_group_name: "ProductGroupName",
                  collections_hero_destination_url: "http://www.pinterest.com",
                  tracking_url: "https://www.pinterest.com",
                  slideshow_collections_title: "Title",
                  status: "ACTIVE",
                  id: "2680059592706",
                },
              ],
              ad_group_id: "26823439592705",
            },
          ],
          keywords: [
            {
              id: "2886364308355",
              archived: false,
              bid: 200000,
            },
          ],
        },
      };

      var ad_account_id = String();
      var response = await pinterest.bulk
        .upsert(ad_account_id, payload)
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
      var ad_account_id = String();
      var bulk_request_id = String();
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
