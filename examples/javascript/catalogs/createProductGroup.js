"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
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
    ad_account_id: String()
  }
  try {
    var response = await pinterest.catalogs.createProductGroup({ query }, payload);
  } catch (error) {
    return;
  }
};

pinsRequest();
