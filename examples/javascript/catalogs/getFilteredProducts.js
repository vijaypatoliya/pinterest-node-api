"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
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
};

pinsRequest();
