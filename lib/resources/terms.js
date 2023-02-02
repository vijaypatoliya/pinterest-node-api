'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  getSuggested: pinterestMethod({
    method: 'GET',
    path: 'v5/terms/suggested',
  }),

  getRelated: pinterestMethod({
    method: 'GET',
    path: 'v5/terms/related',
  }),

});
