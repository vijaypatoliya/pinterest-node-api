"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  var ad_account_id = String();
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
  try {
    var response = await pinterest.ad_groups.getBidFloors(ad_account_id, payload);
    console.log(response);
  } catch (error) {
    console.log(error);
    return;
  }
};

pinsRequest();
