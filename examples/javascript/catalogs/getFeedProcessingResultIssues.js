'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {

  var processing_result_id = 'processing_result_id';
  try {
    var response = await pinterest.catalogs.getFeedProcessingResultIssues(processing_result_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
