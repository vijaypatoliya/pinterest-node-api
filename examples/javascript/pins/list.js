"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require("../../../lib")(userToken);

var pinsRequest = async function () {
  /**
   * GET ALL PINS BY FILTER
   *
   * Passing QUERY Parameters:
   * ------------------------
   * bookmark: String
   * pin_filter: String
   * include_protected_pins: Boolean
   * pin_type: String
   * ad_account_id: String
   *
   * */

  var query = {
    bookmark: String(),
    pin_filter: String(),
    include_protected_pins: Boolean(),
    pin_type: String(),
    ad_account_id: String(),
  };
  try {
    var response = await pinterest.pins.list(
      { query }
    );
  } catch (error) {
    return;
  }
};

pinsRequest();
