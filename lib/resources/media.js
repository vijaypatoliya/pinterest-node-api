"use strict";

var pinterestResource = require("../Resource");
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  getAll: pinterestMethod({
    method: "GET",
    path: "v5/media",
  }),

  register: pinterestMethod({
    method: "POST",
    path: "v5/media",
  }),

  get: pinterestMethod({
    method: "GET",
    path: "v5/media/{media_id}",
    urlParams: ["media_id"],
    required: ["media_id"],
  }),

});
