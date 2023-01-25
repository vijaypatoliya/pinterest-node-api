'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
  var ad_account_id = 'ad_account_id'
  var campaign_id = 'campaign_id'
  try {
    var response = await pinterest.campaigns.get(ad_account_id, campaign_id);
  } catch (error) {
    return;
  }
};

pinsRequest();
