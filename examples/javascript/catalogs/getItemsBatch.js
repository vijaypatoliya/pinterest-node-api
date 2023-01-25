'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {

  var batch_id = 'batch_id';
  try {
    var response = await pinterest.catalogs.getItemsBatch(batch_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
