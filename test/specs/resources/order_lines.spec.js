"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("order_lines.getAll()", function () {
  it("It should get all", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        page_size: Number(),
        order: String(),
        bookmark: String(),
      };
      var response = await pinterest.order_lines
        .getAll(ad_account_id, { query })
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

describe("order_lines.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = 12345;
      var order_line_id = 12345;
      var response = await pinterest.order_lines
        .get(ad_account_id, order_line_id)
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
