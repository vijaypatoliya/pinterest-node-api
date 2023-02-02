"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
   * UPDATE CAMPAIGN
   * 
   * Passing Path Parameters:
   * ------------------------
   * ad_account_id: String
   * 
   * */
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
};

pinsRequest();
