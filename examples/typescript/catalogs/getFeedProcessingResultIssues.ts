'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {

  var processing_result_id = 12345;
  var query = {
    bookmark: String(),
    page_size: Number(),
    item_numbers: Array(Number()),
    item_validation_issue: String(),
    ad_account_id: String()
  }
  try {
    var response = await pinterest.catalogs.getFeedProcessingResultIssues(processing_result_id, { query });
  } catch (error) {
    return;
  }
};

pinsRequest();
