'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {

  var pin = 'pin_id';
  try {
    var response = await pinterest.pins.delete(pin);
  } catch (error) {
    return;
  }
};

pinsRequest();
