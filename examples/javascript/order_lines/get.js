'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {

  var ad_account_id = String();
  var order_line_id = String();
  try {
    var response = await pinterest.order_lines.get(ad_account_id, order_line_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
