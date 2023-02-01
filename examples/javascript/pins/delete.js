'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET SECTIONS
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * pin_id
   * */
  var pin_id = 12345;
  try {
    var response = await pinterest.pins.delete(pin_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
