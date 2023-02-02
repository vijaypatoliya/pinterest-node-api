"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("oauth.createAccessToken()", function () {
  it("It should create access token", async function () {
    try {
      var refresh_token_payload = {
        username: "username",
        password: "password",
        grant_type: "refresh_token",
        refresh_token: "your refresh token",
      };
      var authorization_code_payload = {
        username: "username",
        password: "password",
        grant_type: "authorization_code",
        code: "code",
        redirect_uri: "redirect_uri",
      };
      var response = await pinterest.oauth
        .createAccessToken(authorization_code_payload || refresh_token_payload)
        .catch((error) => {
          if (error) {
            
            return;
          }
        });
      
      expect(response).to.be.a("object");
 } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
});
