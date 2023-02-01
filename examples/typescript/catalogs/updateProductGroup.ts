"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  var product_group_id = String();
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
