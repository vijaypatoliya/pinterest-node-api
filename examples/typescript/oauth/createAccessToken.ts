'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);


var pinsRequest = async function () {
  /**
 * CREATE ACCESS TOKEN
 *
 * */

  var clientId = process.env.PINTEREST_CLIENT_ID;
  var clientSecret = process.env.PINTREST_CLIENT_SECRET;

  var refresh_token_payload = {
    grant_type: "refresh_token",
    refresh_token: "refresh_token",
  };

  var authorization_code_payload = {
    grant_type: "authorization_code",
    code: "code",
    redirect_uri: "redirect_uri",
  };

  /** Set pinterest clientId and clientSecret */
  pinterest.setApiKey(clientId, clientSecret);

  try {
    var response = await pinterest.oauth.createAccessToken(
      refresh_token_payload || authorization_code_payload
    );
  } catch (error) {
    return;
  }
};

pinsRequest();
