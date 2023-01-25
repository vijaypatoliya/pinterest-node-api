"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  var data = {
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
  try {
    var response = await pinterest.catalogs.createProductGroup(board);
  } catch (error) {
    return;
  }
};

pinsRequest();
