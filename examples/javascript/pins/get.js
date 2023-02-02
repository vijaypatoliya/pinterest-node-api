'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET PIN
   * 
   * Passing Path Parameters:
   * ------------------------
   * pin_id
   * 
   * */

  var pin_id = 12345;

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
