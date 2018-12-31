'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  createPin: pinterestMethod({
    method: 'POST',
    path: 'v1/pins/'
  }),

  getPin: pinterestMethod({
    method: 'GET',
    path: 'v1/pins/{pin}/',
    urlParams: ['pin'],
    required: ['pin']
  }),

  getBoardPins: pinterestMethod({
    method: 'GET',
    path: 'v1/boards/{board}/pins/',
    urlParams: ['board'],
    required: ['board']
  }),

  getUserPins: pinterestMethod({
    method: 'GET',
    path: 'v1/me/pins/'
  }),

  updatePin: pinterestMethod({
    method: 'PATCH',
    path: 'v1/pins/{pin}/',
    urlParams: ['pin'],
    required: ['pin']
  }),

  deletePin: pinterestMethod({
    method: 'DELETE',
    path: 'v1/pins/{pin}/',
    urlParams: ['pin'],
    required: ['pin']
  })
});
