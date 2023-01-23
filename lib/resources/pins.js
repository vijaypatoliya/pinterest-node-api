'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  create: pinterestMethod({
    method: 'POST',
    path: 'v5/pins'
  }),

  get: pinterestMethod({
    method: 'GET',
    path: 'v5/pins/{pin_id}',
    urlParams: ['pin_id'],
    required: ['pin_id']
  }),

  delete: pinterestMethod({
    method: 'DELETE',
    path: 'v5/pins/{pin_id}',
    urlParams: ['pin_id'],
    required: ['pin_id']
  }),

  save: pinterestMethod({
    method: 'POST',
    path: 'v5/pins/{pin_id}/save',
    urlParams: ['pin_id'],
    required: ['pin_id']
  }),

  getAnalytics: pinterestMethod({
    method: 'POST',
    path: 'v5/pins/{pin_id}/analytics',
    urlParams: ['pin_id'],
    required: ['pin_id']
  }),

});
