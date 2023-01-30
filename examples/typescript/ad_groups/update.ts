"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  var data = [
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
  var ad_account_id = String();
  try {
    var response = await pinterest.ad_groups.update(ad_account_id, data);
    console.log(response);
  } catch (error) {
    console.log(error);
    return;
  }
};

pinsRequest();
