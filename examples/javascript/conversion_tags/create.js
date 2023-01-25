"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  var data = {
    name: "ACME Tools Tag",
  };
  try {
    var response = await pinterest.conversion_tags.create(data);
  } catch (error) {
    return;
  }
};

pinsRequest();
