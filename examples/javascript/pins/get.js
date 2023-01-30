'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  var pin_id = String();
  var query = {
    ad_account_id: String()
  }
  try {
    var response = await pinterest.pins.get(pin_id, { query });
  } catch (error) {
    return;
  }
};

pinsRequest();
