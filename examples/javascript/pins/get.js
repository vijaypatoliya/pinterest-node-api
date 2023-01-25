'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  var pin_id = 'pin_id';
  try {
    var response = await pinterest.pins.get(pin_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
