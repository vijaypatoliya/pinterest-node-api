"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
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
  var ad_account_id = 'ad_account_id'
  try {
    var response = await pinterest.campaigns.create(ad_account_id, data);
  } catch (error) {
    return;
  }
};

pinsRequest();
