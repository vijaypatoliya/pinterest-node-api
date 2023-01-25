'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {

  try {
    var response = await pinterest.terms.getRelated();
    console.log(response)
  } catch (error) {
    console.log('error', error)
    return;
  }
};

usersRequest();
