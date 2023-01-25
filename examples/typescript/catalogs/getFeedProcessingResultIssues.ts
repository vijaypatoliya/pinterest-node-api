'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {

  var processing_result_id = 'processing_result_id';
  try {
    var response = await pinterest.catalogs.getFeedProcessingResultIssues(processing_result_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
