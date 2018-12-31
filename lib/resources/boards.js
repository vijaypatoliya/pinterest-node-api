'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  createBoard: pinterestMethod({
    method: 'POST',
    path: 'v1/boards/'
  }),

  getBoard: pinterestMethod({
    method: 'GET',
    path: 'v1/boards/{board}/',
    urlParams: ['board'],
    required: ['board']
  }),

  getBoardPins: pinterestMethod({
    method: 'GET',
    path: 'v1/boards/{board}/pins/',
    urlParams: ['board'],
    required: ['board']
  }),

  getUserBoards: pinterestMethod({
    method: 'GET',
    path: 'v1/me/boards/'
  }),

  updateBoard: pinterestMethod({
    method: 'PATCH',
    path: 'v1/boards/{board}/',
    urlParams: ['board'],
    required: ['board']
  }),

  deleteBoard: pinterestMethod({
    method: 'DELETE',
    path: 'v1/boards/{board}/',
    urlParams: ['board'],
    required: ['board']
  })
});
