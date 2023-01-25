"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
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
};

pinsRequest();
