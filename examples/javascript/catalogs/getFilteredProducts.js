"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET FILTERED PRODUCTS
   * */

  var query = {
    bookmark: String(),
    page_size: Number(),
    ad_account_id: String(),
  };

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

  try {
    var response = await pinterest.catalogs.getFilteredProducts(
      { query },
      payload
    );
  } catch (error) {
    return;
  }
};

pinsRequest();
