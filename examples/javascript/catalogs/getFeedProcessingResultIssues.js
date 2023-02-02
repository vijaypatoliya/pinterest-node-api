'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET FEED PROCESSING RESULT ISSUES
   * 
   * Passing Path Parameters:
   * ------------------------
   * 
   * processing_result_id
   * */

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
