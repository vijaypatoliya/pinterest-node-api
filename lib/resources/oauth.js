"use strict";

var pinterestResource = require("../Resource");
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  createAccessToken: pinterestMethod({
    method: "POST",
    path: "v5/oauth/token",
  }),

});
