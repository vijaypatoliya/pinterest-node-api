"use strict";

var pinterest = require("../../../lib")();

var pinsRequest = async function () {

  /**
   * CREATE ACCESS TOKEN
   *
   * */

  var clientId = process.env.PINTEREST_CLIENT_ID;
  var clientSecret = process.env.PINTREST_CLIENT_SECRET;
  var refresh_token_payload = {
    grant_type: "refresh_token",
    refresh_token: "your app refresh token",
  };

  /**
   * code: Call below https request into browser so you would got code into redirect url 
   * 
   * fetch(
   * https://www.pinterest.com/oauth/?client_id={YOUR_CLIENT_ID}&redirect_uri={YOUR_REDIRECT_URI}&response_type=code&scope=boards:read,pins:read&state={YOUR_OPTIONAL_STRING})
   * 
   */

  var authorization_code_payload = {
    grant_type: "authorization_code",
    code: "code would got from https request call",
    redirect_uri: "Your app redirect uri",
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
