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
var pinterest = new PinterestAPI();
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


Originally by osi.vijay@gmail.com : [Vijay Patoliya](https://github.com/vijaypatoliya)


## Examples
---

## Index

1) [AD_ACCOUNTS](#ad_accounts)

2) [AD_GROUPS](#ad_groups)

3) [ADS](#ads)

4) [AUDIENCE_INSIGHTS](#audience_insights)

5) [AUDIENCES](#audiences)

6) [BOARD](#board)

7) [BULK](#bulk)

8) [CAMPAIGNS](#campaigns)

9) [CATALOGS](#catalogs)

10) [CONVERSION_EVENTS](#conversion_events)

11) [CONVERSION_TAGS](#conversion_tags)

12) [CUSTOMER_LISTS](#customer_lists)

13) [KEYWORDS](#keywords)

14) [MEDIA](#media)

15) [OAUTH](#oauth)

16) [ORDER_LINES](#order_lines)

17) [PINS](#pins)

18) [PRODUCT_GROUP_PROMOTIONS](#product_group_promotions)

19) [RESOURCES](#resources)

20) [TERMS](#terms)

21) [TERMS_OF_SERVICE](#terms_of_service)

22) [USER_ACCOUNT](#user_account)


---
> ### [AD_ACCOUNTS](#index)

```js
/** Create ad account */
var payload = {
  country: "US",
  owner_user_id: "383791336903426391",
  name: "ACME Tools",
};

try {
  var response = await pinterest.ad_accounts.create(payload);
  
} catch (error) {
  
  return;
}
```

```js
/** Create ad account report */
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
try {
  var response = await pinterest.ad_accounts.createReport(
    ad_account_id,
    payload
  );
  
} catch (error) {
  
  return;
}
```

```js
/** Get ad account */

var ad_account_id = 12345;
try {
  var response = await pinterest.ad_accounts.get(ad_account_id);
  
} catch (error) {
  
  return;
}
```

```js
/** Get all ad accounts */

var query = {
  bookmark: String(),
  page_size: Number(),
  include_shared_accounts: Boolean(),
};
try {
  var response = await pinterest.ad_accounts.getAll({ query });
  
} catch (error) {
  return;
}
```

```js
/** Get analytics */
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
  var response = await pinterest.ad_accounts.getAnalytics(ad_account_id, {
    query,
  });
  
} catch (error) {
  return;
}
```

```js
/** Get report */

var ad_account_id = 12345;
var query = { token: String() };
try {
  var response = await pinterest.ad_accounts.getReport(ad_account_id, {
    query,
  });
  
} catch (error) {
  
  return;
}
```

```js
/** Get ad account target analytics */

var ad_account_id = 12345;
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
  var response = await pinterest.ad_accounts.getTargetedAnalytics(
    ad_account_id,
    { query }
  );
  
} catch (error) {
  
  return;
}
```

> ### [AD_GROUPS](#index)

```js
/** Create ad group */
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
try {
  var response = await pinterest.ad_groups.create(ad_account_id, payload);
  
} catch (error) {
  
  return;
}
```

```js
/** Get ad group */

var ad_account_id = 12345;
var ad_group_id = 12345;
try {
  var response = await pinterest.ad_groups.get(ad_account_id, ad_group_id);
  
} catch (error) {
  
  return;
}
```

```js
/** Get all ad groups */
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
try {
  var response = await pinterest.ad_groups.getAll(ad_account_id, { query });
  
} catch (error) {
  
  return;
}
```

```js
/** Get ad group analytics */
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
try {
  var response = await pinterest.ad_groups.getAnalytics(ad_account_id, {
    query,
  });
  
} catch (error) {
  
  return;
}
```

```js
/** Get ad group bid floor */
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
try {
  var response = await pinterest.ad_groups.getBidFloors(ad_account_id, payload);
  
} catch (error) {
  
  return;
}
```

```js
/** Get ad group targeted analytics */
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
try {
  var response = await pinterest.ad_groups.getTargetedAnalytics(ad_account_id, {
    query,
  });
  
} catch (error) {
  
  return;
}
```

```js
/** Update ad groups */
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
try {
  var response = await pinterest.ad_groups.update(ad_account_id, payload);
  
} catch (error) {
  
  return;
}
```

> ### [ADS](#index)

```js
/** Create ads */
try {
  var ad_account_id = 12345;
  var payload = [
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
  var response = await pinterest.ads.create(ad_account_id, payload);
} catch (error) {
  return;
}
```

```js
/** Create ads preview */
try {
  var ad_account_id = 12345;
  var createFromImgPayload = {
    image_url: "https://somewebsite.com/someimage.jpg",
    title: "My Preview Image",
  };

  var createFromPinPayload = {
    pin_id: "7389479023",
  };

  var createFromImgResponse = await pinterest.ads.createPreview(
    ad_account_id,
    createFromImgPayload
  );
  var createFromPinResponse = await pinterest.ads.createPreview(
    ad_account_id,
    createFromPinPayload
  );
} catch (error) {
  return;
}
```

```js
/** Get ads */
try {
  var ad_account_id = 12345;
  var ads_id = 12345;

  var response = await pinterest.ads.get(ad_account_id, ads_id);
} catch (error) {
  return;
}
```

```js
/** Get all ads */
try {
  var ad_account_id = 12345;
  var query = {
    campaign_ids: Array(String()),
    ad_group_ids: Array(String()),
    ad_ids: Array(String()),
    entity_statuses: Array(String()),
    entity_statuses: Array(String()),
    page_size: Number(),
    order: String(),
    bookmark: String(),
  };
  var response = await pinterest.ads.getAll(ad_account_id, { query });
} catch (error) {
  return;
}
```

```js
/** Get ads analytics */
try {
  var ad_account_id = 12345;
  var query = {
    start_date: String(Date()),
    end_date: String(Date()),
    ad_ids: Array(String()),
    columns: Array(String()),
    granularity: String(),
    click_window_days: Number(),
    engagement_window_days: Number(),
    view_window_days: Number(),
    conversion_report_time: String(),
  };

  var response = await pinterest.ads.getAnalytics(ad_account_id, { query });
} catch (error) {
  return;
}
```

```js
/** Get ads targeted analytics */
try {
  var ad_account_id = 12345;
  var query = {
    ad_ids: Array(String()),
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
  var response = await pinterest.ads.getTargetedAnalytics(ad_account_id, {
    query,
  });
} catch (error) {
  return;
}
```

```js
/** Update ads */

var payload = [
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
];
var ad_account_id = 12345;
try {
  var response = await pinterest.ads.update(ad_account_id, payload);
} catch (error) {
  return;
}
```

> ### [AUDIENCE_INSIGHTS](#index)

```js
/** Get audience insight */
try {
  var ad_account_id = 12345;
  var query = {
    audience_insight_type: String(),
  };
  var response = await pinterest.audience_insights.get(ad_account_id, {
    query,
  });
} catch (error) {
  return;
}
```

> ### [AUDIENCES](#index)

```js
/** Create audiences */
try {
  var ad_account_id = 12345;
  var payload = {
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
  var response = await pinterest.audiences.create(ad_account_id, payload);
} catch (error) {
  return;
}
```

```js
/** Get audiences */
try {
  var ad_account_id = 12345;
  var audience_id = 12345;

  var response = await pinterest.audiences.get(ad_account_id, audience_id);
} catch (error) {
  return;
}
```

```js
/** Get all audiences */
try {
  var ad_account_id = 12345;
  var query = {
    bookmark: String(),
    order: String(),
    page_size: Number(),
  };

  var response = await pinterest.audiences.getAll(ad_account_id, { query });
} catch (error) {
  return;
}
```

```js
/** Update audiences */
try {
  var ad_account_id = 12345;
  var audience_id = 12345;

  var payload = {
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
    payload
  );
} catch (error) {
  return;
}
```

> ### [BOARD](#index)

```js
/** Create board */
var payload = {
  name: "Summer Recipes",
  description: "My favorite summer recipes",
  privacy: "PUBLIC",
};
try {
  var response = await pinterest.boards.create(payload);
} catch (error) {
  return;
}
```

```js
/** Create board section */
var payload = {
  name: String(),
};

var board_id = 12345;

try {
  var response = await pinterest.boards.createSection(board_id, payload);
} catch (error) {
  return;
}
```

```js
/** Delete board */
var board_id = 12345;
try {
  var response = await pinterest.boards.delete(board_id);
} catch (error) {
  return;
}
```

```js
/** Delete board section */
var board_id = 12345;
var section_id = 12345;
try {
  var response = await pinterest.boards.deleteSection(board_id, section_id);
} catch (error) {
  return;
}
```

```js
/** Get board */
var board_id = 12345;
try {
  var response = await pinterest.boards.get(board_id);
} catch (error) {
  return;
}
```

```js
/** Get all boards */
var query = {
  bookmark: String(),
  page_size: Number(),
  privacy: String(),
};
try {
  var response = await pinterest.boards.getAll({ query });
  
} catch (error) {
  
  return;
}
```

```js
/** Get boards pins */
var board_id = 12345;
var query = {
  bookmark: String(),
  page_size: Number(),
};
try {
  var response = await pinterest.boards.getPins(board_id, { query });
} catch (error) {
  return;
}
```

```js
/** Get board section pins */
var board_id = 12345;
var section_id = 12345;
var query = {
  bookmark: String(),
  page_size: Number(),
};
try {
  var response = await pinterest.boards.getSectionPins(board_id, section_id, {
    query,
  });
} catch (error) {
  return;
}
```

```js
/** Get board sections */
var board_id = 12345;
var query = {
  bookmark: String(),
  page_size: Number(),
};
try {
  var response = await pinterest.boards.getSections(board_id, { query });
} catch (error) {
  return;
}
```

```js
/** Update board */
var payload = {
  name: "your board name",
  description: "your board description",
};

var board_id = 12345;

try {
  var response = await pinterest.boards.update(board_id, payload);
} catch (error) {
  return;
}
```

```js
/** Update board section */
var payload = {
  name: String(),
};

var board_id = 12345;
var section_id = 12345;

try {
  var response = await pinterest.boards.updateSection(
    board_id,
    section_id,
    payload
  );
} catch (error) {
  return;
}
```

> ### [BULK](#index)

```js
/** Download bulk */
var ad_account_id = 12345;
var bulk_request_id = 12345;
try {
  var response = await pinterest.bulk.download(ad_account_id, bulk_request_id);
} catch (error) {
  return;
}
```

```js
/** Get bulk */
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
var ad_account_id = 12345;
try {
  var response = await pinterest.bulk.get(ad_account_id, payload);
} catch (error) {
  return;
}
```

```js
/** Upsert bulk */
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

var ad_account_id = 12345;
try {
  var response = await pinterest.bulk.upsert(ad_account_id, payload);
} catch (error) {
  return;
}
```

> ### [CAMPAIGNS](#index)

```js
/** Create campaign */
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
try {
  var response = await pinterest.campaigns.create(ad_account_id, payload);
} catch (error) {
  return;
}
```

```js
/** Get campaign */
var ad_account_id = 12345;
var campaign_id = 12345;
try {
  var response = await pinterest.campaigns.get(ad_account_id, campaign_id);
} catch (error) {
  return;
}
```

```js
/** Get all campaigns */
var ad_account_id = 12345;
var query = {
  campaign_ids: Array(String()),
  entity_statuses: Array(String()),
  page_size: Number(),
  order: String(),
  bookmark: String(),
};
try {
  var response = await pinterest.campaigns.getAll(ad_account_id, { query });
} catch (error) {
  return;
}
```

```js
/** Get campaign analytics */
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
try {
  var response = await pinterest.campaigns.getAnalytics(ad_account_id, {
    query,
  });
} catch (error) {
  return;
}
```

```js
/** Get campaign targeted analytics */
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
try {
  var response = await pinterest.campaigns.getTargetedAnalytics(ad_account_id, {
    query,
  });
} catch (error) {
  return;
}
```

```js
/** Get campaign targeted analytics */
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
try {
  var response = await pinterest.campaigns.update(ad_account_id, payload);
} catch (error) {
  return;
}
```

> ### [CATALOGS](#index)

```js
/** Create catalogs feed */
var payload = {
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
var query = {
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.createFeed({ query }, payload);
} catch (error) {
  return;
}
```

```js
/** Create catalog product group */
var payload = {
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
var query = {
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.createProductGroup(
    { query },
    payload
  );
} catch (error) {
  return;
}
```

```js
/** Delete catalog feed */
var feed_id = 12345;
var query = {
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.deleteFeed(feed_id, { query });
} catch (error) {
  return;
}
```

```js
/** Delete catalog product group */
var product_group_id = 12345;
var query = {
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.deleteProductGroup(product_group_id, {
    query,
  });
} catch (error) {
  return;
}
```

```js
/** Get catalog feed */
var feed_id = 12345;
var query = {
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.getFeed(feed_id, { query });
} catch (error) {
  return;
}
```

```js
/** Get catalog feed processing result issues */
var processing_result_id = 12345;
var query = {
  bookmark: String(),
  page_size: Number(),
  item_numbers: Array(Number()),
  item_validation_issue: String(),
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.getFeedProcessingResultIssues(
    processing_result_id,
    { query }
  );
} catch (error) {
  return;
}
```

```js
/** Get catalog feed processing results */
var feed_id = 12345;
var query = {
  bookmark: String(),
  page_size: Number(),
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.getFeedProcessingResults(feed_id, {
    query,
  });
} catch (error) {
  return;
}
```

```js
/** Get catalog feeds */
var query = {
  bookmark: String(),
  page_size: Number(),
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.getFeeds({ query });
} catch (error) {
  return;
}
```

```js
/** Get catalogs filtered products */
try {
  var payload = {
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
  var query = {
    bookmark: String(),
    page_size: Number(),
    ad_account_id: String(),
  };
  var response = await pinterest.catalogs.getFilteredProducts(
    { query },
    payload
  );
} catch (error) {
  return;
}
```

```js
/** Get catalogs items */
var query = {
  country: String(),
  item_ids: Array(String()),
  language: String(),
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.getItems({ query });
} catch (error) {
  return;
}
```

```js
/** Get catalogs items batch */
var batch_id = 12345;
var query = {
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.getItemsBatch(batch_id, { query });
} catch (error) {
  return;
}
```

```js
/** Get catalogs product count */
var product_group_id = 12345;
var query = {
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.getProductCount(product_group_id, {
    query,
  });
} catch (error) {
  return;
}
```

```js
/** Get catalogs product group */
var product_group_id = 12345;
var query = {
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.getProductGroup(product_group_id, {
    query,
  });
} catch (error) {
  return;
}
```

```js
/** Get catalogs product groups */
var query = {
  feed_id: String(),
  bookmark: String(),
  page_size: Number(),
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.getProductGroups({ query });
} catch (error) {
  return;
}
```

```js
/** Get catalogs products */
var product_group_id = 12345;
var query = {
  bookmark: String(),
  page_size: Number(),
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.getProducts(product_group_id, {
    query,
  });
} catch (error) {
  return;
}
```

```js
/** Operate catalog item batch */
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

var query = {
  ad_account_id: String(),
};

try {
  var response = await pinterest.catalogs.operateItemBatch(
    { query },
    create || update || delete_discontinued
  );
} catch (error) {
  return;
}
```

```js
/** Update catalog feed */
var feed_id = 12345;
var payload = {
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
var query = {
  ad_account_id: String(),
};
try {
  var response = await pinterest.catalogs.updateFeed(
    feed_id,
    { query },
    payload
  );
} catch (error) {
  return;
}
```

```js
/** Update catalog product groups */
var product_group_id = 12345;
var query = {
  ad_account_id: String(),
};
var payload = {
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
    { query },
    payload
  );
} catch (error) {
  return;
}
```

> ### [CONVERSION_EVENTS](#index)

```js
/** Send conversion events */
var ad_account_id = 12345;
var payload = {
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

var query = {
  test: Boolean(),
};

try {
  var response = await pinterest.conversion_events.send(
    ad_account_id,
    { query },
    payload
  );
} catch (error) {
  return;
}
```

> ### [CONVERSION_TAGS](#index)

```js
/** Create conversion tags */
var payload = {
  name: "ACME Tools Tag",
};
var ad_account_id = 12345;
try {
  var response = await pinterest.conversion_tags.create(ad_account_id, payload);
} catch (error) {
  return;
}
```

```js
/** Get conversion tags */
var ad_account_id = 12345;
var conversion_tag_id = 12345;
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
/** Get all conversion tags */
var ad_account_id = 12345;
var query = {
  filter_deleted: Boolean(),
};
try {
  var response = await pinterest.conversion_tags.getAll(ad_account_id, {
    query,
  });
} catch (error) {
  return;
}
```

```js
/** Get ocpm eligible */
var ad_account_id = 12345;
try {
  var response = await pinterest.conversion_tags.getOcpmEligible(ad_account_id);
} catch (error) {
  return;
}
```

```js
/** Get conversion tags page visit */
var ad_account_id = 12345;
var query = {
  page_size: Number(),
  order: String(),
  bookmark: String(),
};
try {
  var response = await pinterest.conversion_tags.getPageVisit(ad_account_id, {
    query,
  });
} catch (error) {
  return;
}
```

> ### [CUSTOMER_LISTS](#index)

```js
/** Create customer lists */
var ad_account_id = 12345;
var payload = {
  name: "The Glengarry Glen Ross leads",
  records: "email1@pinterest.com,email2@pinterest.com,..<more records>",
  list_type: "EMAIL",
  exceptions: {},
};
try {
  var response = await pinterest.customer_lists.create(ad_account_id, payload);
} catch (error) {
  return;
}
```

```js
/** Get customer lists */
var ad_account_id = 12345;
var customer_list_id = 12345;
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
/** Get all customer lists */
var ad_account_id = 12345;
var query = {
  page_size: Number(),
  order: String(),
  bookmark: String(),
};
try {
  var response = await pinterest.customer_lists.getAll(ad_account_id, {
    query,
  });
} catch (error) {
  return;
}
```

```js
/** Update customer list */
var ad_account_id = 12345;
var customer_list_id = 12345;
var payload = {
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
    payload
  );
} catch (error) {
  return;
}
```

> ### [KEYWORDS](#index)

```js
/** Create keyword */
var payload = {
  keywords: [
    {
      bid: 200000,
      match_type: "BROAD",
      value: "string",
    },
  ],
  parent_id: "383791336903426391",
};

var ad_account_id = 12345;
try {
  var response = await pinterest.keywords.create(ad_account_id, payload);
} catch (error) {
  return;
}
```

```js
/** Get keyword */
var ad_account_id = 12345;
var query = {
  campaign_id: String(),
  ad_group_id: String(),
  match_types: Array(String()),
  page_size: Number(),
  bookmark: String(),
};
try {
  var response = await pinterest.keywords.get(ad_account_id, { query });
} catch (error) {
  return;
}
```

```js
/** Get coutry keyword Metrics */
var ad_account_id = 12345;
var query = {
  country_code: String(),
  keywords: Array(String()),
};
try {
  var response = await pinterest.keywords.getCountryKeywordMetrics(
    ad_account_id,
    { query }
  );
} catch (error) {
  return;
}
```

```js
/** Update keyword */
var payload = {
  keywords: [
    {
      id: "2886364308355",
      archived: false,
      bid: 200000,
    },
  ],
};

var ad_account_id = 12345;
try {
  var response = await pinterest.keywords.update(ad_account_id, payload);
} catch (error) {
  return;
}
```

> ### [MEDIA](#index)

```js
/** Get media */
var media_id = 12345;
try {
  var response = await pinterest.media.get(media_id);
} catch (error) {
  return;
}
```

```js
/** Get all media */
try {
  var query = {
    bookmark: String(),
    page_size: Number(),
  };
  var response = await pinterest.media.getAll({ query });
} catch (error) {
  return;
}
```

```js
/** Register media */
var payload = {
  media_type: String(),
};
try {
  var response = await pinterest.media.register(payload);
} catch (error) {
  return;
}
```

> ### [OAUTH](#index)

```js
/** Create oauth access token */
var refresh_token_payload = {
  grant_type: "refresh_token",
  refresh_token: "your refresh token",
};

var authorization_code_payload = {
  grant_type: "authorization_code",
  code: "code",
  redirect_uri: "redirect_uri",
};

/** Set pinterest clientId and clientSecret */
pinterest.setApiKey('clientId', 'clientSecret');

try {
  var response = await pinterest.oauth.createAccessToken(
    authorization_code_payload || refresh_token_payload
  );
} catch (error) {
  return;
}
```

> ### [ORDER_LINES](#index)

```js
/** Get order lines */
var ad_account_id = 12345;
var order_line_id = 12345;
try {
  var response = await pinterest.order_lines.get(ad_account_id, order_line_id);
} catch (error) {
  return;
}
```

```js
/** Get all order lines */
var ad_account_id = 12345;
var query = {
  page_size: Number(),
  order: String(),
  bookmark: String(),
};
try {
  var response = await pinterest.order_lines.getAll(ad_account_id, { query });
} catch (error) {
  return;
}
```

> ### [PINS](#index)

```js
/** Create pin */
var payload = {
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
  var response = await pinterest.pins.create(payload);
} catch (error) {
  return;
}
```

```js
/** Delete pin */
var pin_id = 12345;
try {
  var response = await pinterest.pins.delete(pin_id);
} catch (error) {
  return;
}
```

```js
/** Get pin */
var pin_id = 12345;
var query = {
  ad_account_id: String(),
};
try {
  var response = await pinterest.pins.get(pin_id, { query });
} catch (error) {
  return;
}
```

```js
/** Get pin analytics */
var pin_id = 12345;
var query = {
  start_date: String(Date()),
  end_date: String(Date()),
  app_types: String(),
  app_types: String(),
  metric_types: Array(String()) || String(),
  split_field: String(),
  ad_account_id: String(),
};
try {
  var response = await pinterest.pins.getAnalytics(pin_id, { query });
} catch (error) {
  return;
}
```

```js
/** Save pin */
var pin_id = 12345;
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

> ### [PRODUCT_GROUP_PROMOTIONS](#index)

```js
/** Create product group promotions */
var ad_account_id = 12345;
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
  
} catch (error) {
  
  return;
}
```

```js
/** Get product group promotions */
var ad_account_id = 12345;
var product_group_promotion_id = 12345;
try {
  var response = await pinterest.product_group_promotions.get(
    ad_account_id,
    product_group_promotion_id
  );
  
} catch (error) {
  
  return;
}
```

```js
/** Get all product group promotions */
var ad_account_id = 12345;
var query = {
  product_group_promotion_ids: Array(String()),
  entity_statuses: Array(String()),
  ad_group_id: String(),
  page_size: Number(),
  order: String(),
  bookmark: String(),
};
try {
  var response = await pinterest.product_group_promotions.getAll(
    ad_account_id,
    { query }
  );
  
} catch (error) {
  
  return;
}
```

```js
/** Get product group promotions analytics */
var ad_account_id = 12345;
var query = {
  start_date: String(Date()),
  end_date: String(Date()),
  product_group_ids: Array(String()),
  columns: Array(String()),
  granularity: String(),
  click_window_days: Number(),
  engagement_window_days: Number(),
  view_window_days: Number(),
  conversion_report_time: String(),
};
try {
  var response = await pinterest.product_group_promotions.getAnalytics(
    ad_account_id,
    { query }
  );
  
} catch (error) {
  
  return;
}
```

```js
/** Update product group promotions */
var ad_account_id = 12345;
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
  
} catch (error) {
  
  return;
}
```

> ### [RESOURCES](#index)

```js
/** Get resources account countries */
var query = {
  report_type: String(),
};
try {
  var response = await pinterest.resources.getAdAccountCountries({ query });
  
} catch (error) {
  
  return;
}
```

```js
/** Get resources available metrics */
try {
  var query = {
    report_type: String(),
  };
  var response = await pinterest.resources.getAvailableMetrics({ query });
  
} catch (error) {
  
  return;
}
```

```js
/** Get resource interest */
try {
  var interest_id = 12345;
  var response = await pinterest.resources.getInterest(interest_id);
  
} catch (error) {
  
  return;
}
```

```js
/** Get resources metrics ready state */
try {
  var query = {
    date: String(),
  };
  var response = await pinterest.resources.getMetricsReadyState({ query });
  
} catch (error) {
  
  return;
}
```

```js
/** Get targeting options */
try {
  var targeting_type = 12345;
  var query = {
    client_id: String(),
    oauth_signature: String(),
    timestamp: String(),
  };

  var response = await pinterest.resources.getTargetingOptions(targeting_type, {
    query,
  });
  
} catch (error) {
  
  return;
}
```

> ### [TERMS](#index)

```js
/** Get related terms */
try {
  var query = {
    terms: Array(String()),
  };
  var response = await pinterest.terms.getRelated({ query });
  
} catch (error) {
  
  return;
}
```

```js
/** Get suggested terms */
try {
  var query = {
    term: String(),
    limit: Number(),
  };
  var response = await pinterest.terms.getSuggested({ query });
  
} catch (error) {
  
  return;
}
```

> ### [TERMS_OF_SERVICE](#index)

```js
/** Get terms of service */
try {
  var ad_account_id = 12345;
  var query = {
    include_html: Boolean(),
    tos_type: String(),
  };
  var response = await pinterest.terms_of_service.get(ad_account_id, { query });
  
} catch (error) {
  
  return;
}
```

> ### [USER_ACCOUNT](#index)

```js
/** Get user account */
var query = {
  ad_account_id: String(),
};
try {
  var response = await pinterest.user_account.get({ query });
  
} catch (error) {
  
  return;
}
```

```js
/** Get user account analytics */
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
  var response = await pinterest.user_account.getAnalytics({ query });
  
} catch (error) {
  
  return;
}
```

```js
/** Get user account top pin analytics */
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
  var response = await pinterest.user_account.getTopPinsAnalytics({ query });
  
} catch (error) {
  
  return;
}
```

```js
/** Get user account top video pin analytics */
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
  var response = await pinterest.user_account.getTopVideoPinsAnalytics({
    query,
  });
  
} catch (error) {
  
  return;
}
```
