# pinterest-node-api (Pinterest Node Rest API)

[![Build Status](https://travis-ci.org/vijaypatoliya/pinterest-node-api.svg?branch=master)](https://travis-ci.org/vijaypatoliya/pinterest-node-api) [![Stackoverflow Thread](https://img.shields.io/badge/stackoverflow-pinterest--node--api-yellowgreen.svg)](https://stackoverflow.com/search?q=nodejs-pinterest-node-api)

This API supported Pinterest's standard REST API that accepts/returns JSON requests. Here is the [API reference] (https://developers.pinterest.com/docs/api/overview/)

You can find [examples of JavaScript And TypeScript](https://github.com/vijaypatoliya/pinterest-node-api/tree/master/examples). This will help you with faster implementation of Pinterest APIs.
It supports ECMAScript 5, ECMAScript 6, ECMAScript 8, TypeScript, async-await, Promises, and Callback!!!

It also supports AWS Lambda like a serverless cloud function call.

##### It supports pure JSON response.

##### All methods support Promise and Callback both.

## Get started

Using the Pinterest API wrapper for Node.js is really simple.
Given that you already have a Node.js project with an NPM setup just follow these steps:

**Install the dependency**

```
npm install --save pinterest-node-api
```

## Get Access Token From Using Below Link and Overview Details

[https://developers.pinterest.com/docs/api/overview/](https://developers.pinterest.com/docs/api/overview/)

## Configuration Using JavaScript

```bash
export PINTEREST_USER_TOKEN=ACCESS_TOKEN
```

```js
var pinterest = require("pinterest-node-api")("YOUR_ACCESS_TOKEN");
```

## Configuration Using TypeScript

```js
import * as PinterestAPI from "pinterest-node-api";
const pinterest = new PinterestAPI();
pinterest.setUserToken("YOUR_ACCESS_TOKEN");
```

## Test Cases

```bash
npm run test.mocha
```

## Debugging

```bash
export DEBUG=pinterest:*
```

```
Originally by [Vijay Patoliya](https://github.com/vijaypatoliya) (osi.vijay@gmail.com).
```

## Examples

> ### AD_ACCOUNTS

```js
/* Create */

var data = {
  country: "US",
  owner_user_id: "383791336903426391",
  name: "ACME Tools",
};

try {
  var response = await pinterest.ad_accounts.create(data);
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

```js
/* CREATE REPORT */

var data = {
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

try {
  var response = await pinterest.ad_accounts.createReport(data);
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

```js
/* GET */

var data = {};
try {
  var response = await pinterest.ad_accounts.get("12345");
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

```js
/* GET ALL */

try {
  var response = await pinterest.ad_accounts.getAll({});
  console.log(response);
} catch (error) {
  return;
}
```

```js
/* GET ANALYTICS */

const ad_account_id = 12345
    var response = await pinterest.ad_accounts.getAnalytics(ad_account_id)
    console.log(response)
  } catch (error) {
    return;
  }
```

```js
/* GET REPORT */

var ad_account_id = 12345;
try {
  var response = await pinterest.ad_accounts.getReport(ad_account_id);
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

```js
/* GET TARGETED ANALYTICS */

var ad_account_id = 12345;
try {
  var response = await pinterest.ad_accounts.getTargetedAnalytics(
    ad_account_id
  );
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

```js
/* GET TARGETED ANALYTICS */

var ad_account_id = 12345;
try {
  var response = await pinterest.ad_accounts.getTargetedAnalytics(
    ad_account_id
  );
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

> ### AD_GROUPS

```js
/* CREACT */

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
try {
  var response = await pinterest.ad_groups.create(ad_account_id, data);
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

```js
/* GET */

var ad_account_id = 12345;
var ad_group_id = 12345;
try {
  var response = await pinterest.ad_groups.get(ad_account_id, ad_group_id);
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

```js
var ad_account_id = 12345;
try {
  var response = await pinterest.ad_groups.getAll(ad_account_id);
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

```js
var ad_account_id = 12345;
try {
  var response = await pinterest.ad_groups.getAnalytics(ad_account_id);
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

```js
var ad_account_id = 12345;
try {
  var response = await pinterest.ad_groups.getBidFloors(ad_account_id);
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

```js
var ad_account_id = 12345;
try {
  var response = await pinterest.ad_groups.getBidFloors(ad_account_id);
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

```js
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
try {
  var response = await pinterest.ad_groups.update(ad_account_id, data);
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

### ADS

```js

var ad_account_id = 12345;
    var data = [
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
    ];
    var response = await pinterest.ads.create(ad_account_id, data);
  } catch (error) {
    return;
  }


```

```js
try {
  var ad_account_id = 12345;
  var createFromImg = {
    image_url: "https://somewebsite.com/someimage.jpg",
    title: "My Preview Image",
  };

  var createFromPin = {
    pin_id: "7389479023",
  };

  var createFromImgResponse = await pinterest.ads.createPreview(
    ad_account_id,
    createFromImg
  );
  var createFromPinResponse = await pinterest.ads.createPreview(
    ad_account_id,
    createFromPin
  );
} catch (error) {
  return;
}
```

```js
try {
  var ad_account_id = 12345;
  var ads_id = 12345;

  var response = await pinterest.ads.get(ad_account_id, ads_id);
} catch (error) {
  return;
}
```

```js
try {
  var ad_account_id = 12345;

  var response = await pinterest.ads.getAll(ad_account_id);
} catch (error) {
  return;
}
```

```js
try {
  var ad_account_id = 12345;

  var response = await pinterest.ads.getAnalytics(ad_account_id);
} catch (error) {
  return;
}
```

```js
try {
  var ad_account_id = 12345;

  var response = await pinterest.ads.getTargetedAnalytics(ad_account_id);
} catch (error) {
  return;
}
```

```js
/**
 * passing parameters
 * -------------------
 *
 * link
 * title
 * description
 * board_id (required) (The board id)
 * note (required)
 * dominant_color
 * board_section_id
 * alt_text
 * media_source.source_type
 * media_source.content_type
 * media_source.data (The link of a Base64 encoded image)
 * parent_pin_id
 *
 * (optional)
 * fields (link)
 */

var data = {
  board: "pideveloper/board-2",
  note: "it's a test pin desc.",
  image_url:
    "https://www.birmingham.ac.uk/Images/College-EPS-only/outreach/engineering/aerospace-engineering.jpg",
};
try {
  var response = await pinterest.pins.createPin(data);
} catch (error) {
  return;
}
```

### AUDIENCE_INSIGHTS

```js
try {
  var ad_account_id = 12345;

  var response = await pinterest.audience_insights.get(ad_account_id);
} catch (error) {
  return;
}
```

### AUDIENCES

```js
try {
  var ad_account_id = 12345;
  var data = {
    ad_account_id: "549755885175",
    name: "string",
    rule: {
      country: "US",
      customer_list_id: "5497558859876",
      engagement_domain: ["www.somedomain.com"],
      engagement_type: "click",
      event: "checkout",
      event_data: {
        currency: "USD",
        lead_type: "Newsletter",
        line_items: {
          product_brand: "Parker",
          product_category: "Shoes",
          product_id: 1414,
          product_name: "Parker Boots",
          product_price: "99.99",
          product_quantity: 2,
          product_variant: "Red",
          product_variant_id: "1414-34832",
        },
        order_id: "X-151481",
        order_quantity: 1,
        page_name: "Our Favorite Pins on Pinterest.",
        promo_code: "WINTER10",
        property: "Athleta",
        search_query: "boots",
        value: "199.98",
        video_title: "How to style your Parker Boots",
      },
      percentage: 30,
      pin_id: ["34567"],
      prefill: true,
      retention_days: 30,
      seed_id: ["2542620639259", "2542620639261"],
      url: ["string"],
      visitor_source_id: "549755885175",
      event_source: {
        "=": ["web", "mobile"],
      },
      ingestion_source: {
        "=": ["tag"],
      },
      engager_type: 1,
      campaign_id: ["626744528398"],
      ad_id: ["687201361754"],
      objective_type: ["AWARENESS"],
      ad_account_id: "549755885175",
    },
    description: "string",
    audience_type: "string",
  };
  var response = await pinterest.audiences.create(ad_account_id, data);
} catch (error) {
  return;
}
```

```js
try {
  var ad_account_id = 12345;
  var audience_id = 12345;

  var response = await pinterest.audiences.get(ad_account_id, audience_id);
} catch (error) {
  return;
}
```

```js
try {
  var ad_account_id = 12345;

  var response = await pinterest.audiences.getAll(ad_account_id);
} catch (error) {
  return;
}
```

```js
try {
  var ad_account_id = 12345;
  var audience_id = 12345;

  var data = {
    ad_account_id: "549755885175",
    name: "string",
    rule: {
      country: "US",
      customer_list_id: "5497558859876",
      engagement_domain: ["www.somedomain.com"],
      engagement_type: "click",
      event: "checkout",
      event_data: {
        currency: "USD",
        lead_type: "Newsletter",
        line_items: {
          product_brand: "Parker",
          product_category: "Shoes",
          product_id: 1414,
          product_name: "Parker Boots",
          product_price: "99.99",
          product_quantity: 2,
          product_variant: "Red",
          product_variant_id: "1414-34832",
        },
        order_id: "X-151481",
        order_quantity: 1,
        page_name: "Our Favorite Pins on Pinterest.",
        promo_code: "WINTER10",
        property: "Athleta",
        search_query: "boots",
        value: "199.98",
        video_title: "How to style your Parker Boots",
      },
      percentage: 30,
      pin_id: ["34567"],
      prefill: true,
      retention_days: 30,
      seed_id: ["2542620639259", "2542620639261"],
      url: ["string"],
      visitor_source_id: "549755885175",
      event_source: {
        "=": ["web", "mobile"],
      },
      ingestion_source: {
        "=": ["tag"],
      },
      engager_type: 1,
      campaign_id: ["626744528398"],
      ad_id: ["687201361754"],
      objective_type: ["AWARENESS"],
      ad_account_id: "549755885175",
    },
    description: "string",
    operation_type: "UPDATE",
  };
  var response = await pinterest.audiences.update(
    ad_account_id,
    audience_id,
    data
  );
} catch (error) {
  return;
}
```

### BOARD

```js
var data = {
  name: "Summer Recipes",
  description: "My favorite summer recipes",
  privacy: "PUBLIC",
};
try {
  var response = await pinterest.boards.create(data);
} catch (error) {
  return;
}
```

```js
/**
 * passing parameters
 * -------------------
 *
 * board (The board id)
 */
var board_id = "board_id";
try {
  var response = await pinterest.boards.delete(board_id);
} catch (error) {
  return;
}
```

```js
/**
 * passing parameters
 * -------------------
 *
 * board (The board id)
 */
var board_id = "board_id";
var section_id = "section_id";
try {
  var response = await pinterest.boards.deleteSection(board_id, section_id);
} catch (error) {
  return;
}
```

```js
/**
 * passing parameters
 * -------------------
 * board (The board id)
 */
var board_id = "board_id";
try {
  var response = await pinterest.boards.getBoard(board_id);
} catch (error) {
  return;
}
```

```js
/**
 * passing parameters
 * -------------------
 * board (The board id)
 */
try {
  var response = await pinterest.boards.getAll({
    query: {
      page_size: 1,
      privacy: "PROTECTED",
    },
  });
  console.log(response);
} catch (error) {
  console.log(error);
  return;
}
```

```js
/**
 * passing parameters
 * -------------------
 * board (The board id)
 */
var board_id = "board_id";
try {
  var response = await pinterest.boards.getPins(board_id);
} catch (error) {
  return;
}
```

```js
/**
 * passing parameters
 * -------------------
 * board (The board id)
 */
var board_id = "board_id";
try {
  var response = await pinterest.boards.getAllSections(board_id);
} catch (error) {
  return;
}
```

```js
/**
 * passing parameters
 * -------------------
 *
 * board (The board name in the format: <username>/<board_name>)
 * name
 * description
 *
 * (optional)
 * fields (privacy: Enum ["PUBLIC" "SECRET"])
 */

var data = {
  name: "your board name",
  description: "your board description",
};

var board_id = "board_id";

try {
  var response = await pinterest.boards.update(board_id, data);
} catch (error) {
  return;
}
```

```js
/**
 * passing parameters
 * -------------------
 *
 * board (The board name in the format: <username>/<board_name>)
 * name
 * description
 *
 * (optional)
 * fields (privacy: Enum ["PUBLIC" "SECRET"])
 */

var data = {
  name: "Salads",
};

var board_id = "board_id";
var section_id = "section_id";

try {
  var response = await pinterest.boards.updateSection(
    board_id,
    section_id,
    data
  );
} catch (error) {
  return;
}
```

### BULK

```js
var ad_account_id = "ad_account_id";
var bulk_request_id = "bulk_request_id";
try {
  var response = await pinterest.bulk.download(ad_account_id, bulk_request_id);
} catch (error) {
  return;
}
```

```js
var data = {
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
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.bulk.get(ad_account_id, data);
} catch (error) {
  return;
}
```

```js
var data = {
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

var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.pins.createPin(ad_account_id, data);
} catch (error) {
  return;
}
```

### CAMPAIGNS

```js
var data = [
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
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.campaigns.create(ad_account_id, data);
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
var campaign_id = "campaign_id";
try {
  var response = await pinterest.campaigns.get(ad_account_id, campaign_id);
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.campaigns.getAll(ad_account_id);
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.campaigns.getAnalytics(ad_account_id);
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.campaigns.getTargetedAnalytics(ad_account_id);
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.campaigns.get(ad_account_id);
} catch (error) {
  return;
}
```

### CATALOGS

```js
var data = {
  default_country: "US",
  default_availability: "IN_STOCK",
  default_currency: "USD",
  name: "string",
  format: "TSV",
  default_locale: "en_US",
  credentials: {
    password: "pa$$word",
    username: "string",
  },
  location: "string",
  preferred_processing_schedule: {
    time: "02:59",
    timezone: "Africa/Abidjan",
  },
};
try {
  var response = await pinterest.catalogs.createFeed(data);
} catch (error) {
  return;
}
```

```js
var data = {
  name: "string",
  description: "string",
  is_featured: false,
  filters: {
    any_of: [
      {
        MIN_PRICE: {
          inclusion: true,
          values: 0,
          negated: false,
        },
      },
    ],
  },
  feed_id: "2680059592705",
};
try {
  var response = await pinterest.catalogs.createProductGroup(board);
} catch (error) {
  return;
}
```

```js
var feed_id = "feed_id";
try {
  var response = await pinterest.catalogs.deleteFeed(feed_id);
} catch (error) {
  return;
}
```

```js
var product_group_id = "product_group_id";
try {
  var response = await pinterest.catalogs.deleteProductGroup(product_group_id);
} catch (error) {
  return;
}
```

```js
var feed_id = "feed_id";
try {
  var response = await pinterest.catalogs.getFeed(feed_id);
} catch (error) {
  return;
}
```

```js
var processing_result_id = "processing_result_id";
try {
  var response = await pinterest.catalogs.getFeedProcessingResultIssues(
    processing_result_id
  );
} catch (error) {
  return;
}
```

```js
var feed_id = "feed_id";
try {
  var response = await pinterest.catalogs.getFeedProcessingResults(feed_id);
} catch (error) {
  return;
}
```

```js
try {
  var response = await pinterest.catalogs.getFeeds();
} catch (error) {
  return;
}
```

```js
try {
  var data = {
    feed_id: "2680059592705",
    filters: {
      any_of: [
        {
          MIN_PRICE: {
            inclusion: true,
            values: 0,
            negated: false,
          },
        },
      ],
    },
  };
  var response = await pinterest.pins.getFilteredProducts(data);
} catch (error) {
  return;
}
```

```js
try {
  var response = await pinterest.catalogs.getItems();
} catch (error) {
  return;
}
```

```js
var batch_id = "batch_id";
try {
  var response = await pinterest.catalogs.getItemsBatch(batch_id);
} catch (error) {
  return;
}
```

```js
var product_group_id = "product_group_id";
try {
  var response = await pinterest.catalogs.getProductCount(product_group_id);
} catch (error) {
  return;
}
```

```js
var product_group_id = "product_group_id";
try {
  var response = await pinterest.catalogs.getProductGroup(product_group_id);
} catch (error) {
  return;
}
```

```js
try {
  var response = await pinterest.catalogs.getProductGroups();
} catch (error) {
  return;
}
```

```js
var product_group_id = "product_group_id";
try {
  var response = await pinterest.catalogs.getProducts(product_group_id);
} catch (error) {
  return;
}
```

```js
var update = {
  country: "US",
  language: "EN",
  operation: "UPDATE",
  items: [
    {
      item_id: "DS0294-M",
      attributes: {
        ad_link:
          "https://www.example.com/cat/denim-shirt/item012?utm_source=Pinterest",
        adult: true,
        age_group: "newborn",
        availability: "in stock",
        average_review_rating: 5,
        brand: "Josie’s Denim",
        checkout_enabled: false,
        color: "blue",
        condition: "new",
        custom_label_0: "Best sellers",
        custom_label_1: "Summer promotion",
        custom_label_2: "Winter sales",
        custom_label_3: "Woman dress",
        custom_label_4: "Man hat",
        description:
          "Casual fit denim shirt made with the finest quality Japanese denim.",
        free_shipping_label: true,
        free_shipping_limit: "35 USD",
        gender: "unisex",
        google_product_category:
          "Apparel & Accessories > Clothing > Shirts & Tops",
        gtin: 3234567890126,
        id: "DS0294-L",
        item_group_id: "DS0294",
        last_updated_time: 1641483432072,
        link: "https://www.example.com/cat/womens-clothing/denim-shirt-0294",
        material: "cotton",
        min_ad_price: "19.99 USD",
        mobile_link:
          "https://m.example.com/cat/womens-clothing/denim-shirt-0294",
        mpn: "PI12345NTEREST",
        number_of_ratings: 10,
        number_of_reviews: 10,
        pattern: "plaid",
        price: "24.99 USD",
        product_type: "Clothing > Women’s > Shirts > Denim",
        sale_price: "14.99 USD",
        shipping: "US:CA:Ground:0 USD",
        shipping_height: "12 in",
        shipping_weight: "3 kg",
        shipping_width: "16 in",
        size: "M",
        size_system: "US",
        size_type: "regular",
        tax: "US:1025433:6.00:y",
        title: "Women’s denim shirt, large",
        variant_names: ["Color", "Size"],
        variant_values: ["Red", "Small"],
      },
    },
  ],
};
var create = {
  country: "US",
  language: "EN",
  operation: "CREATE",
  items: [
    {
      item_id: "DS0294-M",
      attributes: {
        additional_image_link: [
          "https://scene.example.com/image/image_v2.jpg",
          "https://scene.example.com/image/image_v3.jpg",
        ],
        image_link: ["https://scene.example.com/image/image.jpg"],
        ad_link:
          "https://www.example.com/cat/denim-shirt/item012?utm_source=Pinterest",
        adult: true,
        age_group: "newborn",
        availability: "in stock",
        average_review_rating: 5,
        brand: "Josie’s Denim",
        checkout_enabled: false,
        color: "blue",
        condition: "new",
        custom_label_0: "Best sellers",
        custom_label_1: "Summer promotion",
        custom_label_2: "Winter sales",
        custom_label_3: "Woman dress",
        custom_label_4: "Man hat",
        description:
          "Casual fit denim shirt made with the finest quality Japanese denim.",
        free_shipping_label: true,
        free_shipping_limit: "35 USD",
        gender: "unisex",
        google_product_category:
          "Apparel & Accessories > Clothing > Shirts & Tops",
        gtin: 3234567890126,
        id: "DS0294-L",
        item_group_id: "DS0294",
        last_updated_time: 1641483432072,
        link: "https://www.example.com/cat/womens-clothing/denim-shirt-0294",
        material: "cotton",
        min_ad_price: "19.99 USD",
        mobile_link:
          "https://m.example.com/cat/womens-clothing/denim-shirt-0294",
        mpn: "PI12345NTEREST",
        number_of_ratings: 10,
        number_of_reviews: 10,
        pattern: "plaid",
        price: "24.99 USD",
        product_type: "Clothing > Women’s > Shirts > Denim",
        sale_price: "14.99 USD",
        shipping: "US:CA:Ground:0 USD",
        shipping_height: "12 in",
        shipping_weight: "3 kg",
        shipping_width: "16 in",
        size: "M",
        size_system: "US",
        size_type: "regular",
        tax: "US:1025433:6.00:y",
        title: "Women’s denim shirt, large",
        variant_names: ["Color", "Size"],
        variant_values: ["Red", "Small"],
      },
    },
  ],
};
var delete_discontinued = {
  country: "US",
  language: "EN",
  operation: "DELETE_DISCONTINUED",
  items: [
    {
      item_id: "DS0294-M",
    },
  ],
};
try {
  var response = await pinterest.catalogs.operateItemBatch(
    create || update || delete_discontinued
  );
} catch (error) {
  return;
}
```

```js
var feed_id = "feed_id";
var data = {
  default_availability: "IN_STOCK",
  default_currency: "USD",
  name: "string",
  format: "TSV",
  credentials: {
    password: "pa$$word",
    username: "string",
  },
  location: "string",
  preferred_processing_schedule: {
    time: "02:59",
    timezone: "Africa/Abidjan",
  },
  status: "ACTIVE",
};
try {
  var response = await pinterest.catalogs.updateFeed(feed_id, data);
} catch (error) {
  return;
}
```

```js
var product_group_id = "product_group_id";
var data = {
  name: "string",
  description: "string",
  is_featured: true,
  filters: {
    any_of: [
      {
        MIN_PRICE: {
          inclusion: true,
          values: 0,
          negated: false,
        },
      },
    ],
  },
};
try {
  var response = await pinterest.catalogs.updateProductGroup(
    product_group_id,
    data
  );
} catch (error) {
  return;
}
```

### CONVERSION_EVENTS

```js
var ad_account_id = "ad_account_id";
var body = {
  data: [
    {
      event_name: "checkout",
      action_source: "app_ios",
      event_time: 1451431341,
      event_id: "eventId0001",
      event_source_url: "https://example.org/",
      opt_out: false,
      partner_name: "string",
      user_data: {
        em: ["string"],
      },
      custom_data: {
        currency: "USD",
        value: "425325.89",
        content_ids: ["string"],
        contents: [
          {
            item_price: "1325.12",
            quantity: 0,
          },
        ],
        num_items: 0,
        order_id: "string",
        search_string: "string",
        opt_out_type: "LDP",
        np: "string",
      },
      app_id: "string",
      app_name: "string",
      app_version: "string",
      device_brand: "string",
      device_carrier: "string",
      device_model: "string",
      device_type: "string",
      os_version: "string",
      wifi: false,
      language: "en",
    },
  ],
};
try {
  var response = await pinterest.conversion_events.send(ad_account_id, data);
} catch (error) {
  return;
}
```

### CONVERSION_TAGS

```js
var data = {
  name: "ACME Tools Tag",
};
try {
  var response = await pinterest.conversion_tags.create(data);
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
var conversion_tag_id = "conversion_tag_id";
try {
  var response = await pinterest.conversion_tags.get(
    ad_account_id,
    conversion_tag_id
  );
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.conversion_tags.getAll(ad_account_id);
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.conversion_tags.getOcpmEligible(ad_account_id);
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.conversion_tags.getPageVisit(ad_account_id);
} catch (error) {
  return;
}
```

### CUSTOMER_LISTS

```js
var ad_account_id = "ad_account_id";
var data = {
  name: "The Glengarry Glen Ross leads",
  records: "email1@pinterest.com,email2@pinterest.com,..<more records>",
  list_type: "EMAIL",
  exceptions: {},
};
try {
  var response = await pinterest.customer_lists.create(ad_account_id, data);
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
var customer_list_id = "customer_list_id";
try {
  var response = await pinterest.customer_lists.get(
    ad_account_id,
    customer_list_id
  );
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.customer_lists.getAll(ad_account_id);
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
var customer_list_id = "customer_list_id";
var data = {
  records: "email2@pinterest.com,email6@pinterest.com,",
  operation_type: "REMOVE",
  exceptions: {
    code: 2,
    message: "Advertiser not found.",
  },
};
try {
  var response = await pinterest.customer_lists.update(
    ad_account_id,
    customer_list_id,
    data
  );
} catch (error) {
  return;
}
```

### KEYWORDS

```js
var data = {
  keywords: [
    {
      bid: 200000,
      match_type: "BROAD",
      value: "string",
    },
  ],
  parent_id: "383791336903426391",
};

var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.keywords.create(ad_account_id, data);
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.keywords.get(ad_account_id);
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.keywords.getCountryKeywordMetrics(
    ad_account_id
  );
} catch (error) {
  return;
}
```

### MEDIA

```js
var media_id = "media_id";
try {
  var response = await pinterest.media.get(media_id);
} catch (error) {
  return;
}
```

```js
try {
  var response = await pinterest.media.getAll();
} catch (error) {
  return;
}
```

```js
var payload = {
  media_type: "video",
};
try {
  var response = await pinterest.media.register(payload);
} catch (error) {
  return;
}
```

### OAUTH

```js
const refresh_token_payload = {
  username: "username",
  password: "password",
  grant_type: "refresh_token",
  refresh_token: "your refresh token",
};
const authorization_code_payload = {
  username: "username",
  password: "password",
  grant_type: "authorization_code",
  code: "code",
  redirect_uri: "redirect_uri",
};
try {
  var response = await pinterest.oauth.createAccessToken(
    authorization_code_payload || refresh_token_payload
  );
} catch (error) {
  return;
}
```

### ORDER_LINES

```js
var ad_account_id = "ad_account_id";
var order_line_id = "order_line_id";
try {
  var response = await pinterest.order_lines.get(ad_account_id, order_line_id);
} catch (error) {
  return;
}
```

```js
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.order_lines.get(ad_account_id);
} catch (error) {
  return;
}
```

### PINS

```js
var data = {
  link: "https://www.pinterest.com/",
  title: "string",
  description: "string",
  dominant_color: "#6E7874",
  alt_text: "string",
  board_id: "string",
  board_section_id: "string",
  media_source: {
    source_type: "image_base64",
    content_type: "image/jpeg",
    data: "string",
  },
  parent_pin_id: "string",
};
try {
  var response = await pinterest.pins.create(data);
} catch (error) {
  return;
}
```

```js
var pin = "pin_id";
try {
  var response = await pinterest.pins.delete(pin);
} catch (error) {
  return;
}
```

```js
var pin_id = "pin_id";
try {
  var response = await pinterest.pins.get(pin_id);
} catch (error) {
  return;
}
```

```js
var pin_id = "pin_id";
try {
  var response = await pinterest.pins.getAnalytics(pin_id);
} catch (error) {
  return;
}
```

```js
var pin_id = "pin_id";
var payload = {
  board_id: "string",
  board_section_id: "string",
};
try {
  var response = await pinterest.pins.save(pin_id, payload);
} catch (error) {
  return;
}
```

### PRODUCT_GROUP_PROMOTIONS

```js
var ad_account_id = "ad_account_id";
var payload = {
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
};
try {
  var response = await pinterest.product_group_promotions.create(
    ad_account_id,
    payload
  );
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

```js
var ad_account_id = "ad_account_id";
var product_group_promotion_id = "product_group_promotion_id";
try {
  var response = await pinterest.product_group_promotions.get(
    ad_account_id,
    product_group_promotion_id
  );
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

```js
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.product_group_promotions.get(ad_account_id);
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

```js
var ad_account_id = "ad_account_id";
try {
  var response = await pinterest.product_group_promotions.getAnalytics(
    ad_account_id
  );
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

```js
var ad_account_id = "ad_account_id";
var payload = {
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
};
try {
  var response = await pinterest.product_group_promotions.update(
    ad_account_id,
    payload
  );
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

### RESOURCES

```js
try {
  var response = await pinterest.resources.getAdAccountCountries();
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

```js
try {
  var response = await pinterest.resources.getAvailableMetrics();
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

```js
try {
  var interest_id = "interest_id";
  var response = await pinterest.resources.getInterest(interest_id);
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

```js
try {
  var response = await pinterest.resources.getMetricsReadyState();
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

```js
try {
  var targeting_type = "targeting_type";
  var response = await pinterest.resources.getTargetingOptions(targeting_type);
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

### TERMS

```js
try {
  var response = await pinterest.terms.getRelated();
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

```js
try {
  var response = await pinterest.terms.getSuggested();
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

### TERMS_OF_SERVICE

```js
try {
  var ad_account_id = "ad_account_id";
  var response = await pinterest.terms_of_service.get(ad_account_id);
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

### USER_ACCOUNT

```js
try {
  var response = await pinterest.user_account.get();
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

```js
try {
  var response = await pinterest.user_account.getAnalytics();
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

```js
try {
  var response = await pinterest.user_account.getTopPinsAnalytics();
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```

```js
try {
  var response = await pinterest.user_account.getTopVideoPinsAnalytics();
  console.log(response);
} catch (error) {
  console.log("error", error);
  return;
}
```
