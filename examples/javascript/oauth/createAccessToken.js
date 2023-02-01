'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var pinsRequest = async function () {
  /**
   * GET SECTIONS
   * 
   * */
  const refresh_token_payload = {
    username: 'username',
    password: 'password',
    grant_type: 'refresh_token',
    refresh_token: 'your refresh token'
  }
  const authorization_code_payload = {
    username: 'username',
    password: 'password',
    grant_type: 'authorization_code',
    code: 'code',
    redirect_uri: 'redirect_uri'
  }
  try {
    var response = await pinterest.oauth.createAccessToken(authorization_code_payload || refresh_token_payload);
  } catch (error) {
    return;
  }
};

pinsRequest();
