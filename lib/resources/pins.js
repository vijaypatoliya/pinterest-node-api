'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  createPin: pinterestMethod({
    method: 'POST',
    path: 'v5/pins/'
  }),

  getPin: pinterestMethod({
    method: 'GET',
    path: 'v5/pins/{pin}/',
    urlParams: ['pin'],
    required: ['pin']
  }),

  getBoardPins: pinterestMethod({
    method: 'GET',
    path: 'v5/boards/{board}/pins/',
    urlParams: ['board'],
    required: ['board']
  }),

  deletePin: pinterestMethod({
    method: 'DELETE',
    path: 'v5/pins/{pin}/',
    urlParams: ['pin'],
    required: ['pin']
  })
});
