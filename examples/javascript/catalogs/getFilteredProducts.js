"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
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
    }
    var response = await pinterest.pins.getFilteredProducts({ query }, payload);
  } catch (error) {
    return;
  }
};

pinsRequest();
