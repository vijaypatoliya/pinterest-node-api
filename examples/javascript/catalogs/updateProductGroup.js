"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * UPDATE PRODUCT GROUP
   * 
   * Passing Path Parameters:
   * ------------------------
   * product_group_id
   * 
   * */

  var product_group_id = 12345;

  var query = {
    ad_account_id: String()
  }

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
};

pinsRequest();
