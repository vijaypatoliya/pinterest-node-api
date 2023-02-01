"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  var payload = {
    keywords: [
      {
        id: "2886364308355",
        archived: false,
        bid: 200000,
      },
    ],
  };

  var ad_account_id = String();
  try {
    var response = await pinterest.keywords.update(ad_account_id, payload);
  } catch (error) {
    return;
  }
};

pinsRequest();
