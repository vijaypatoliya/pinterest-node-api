'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  createBoardSection: pinterestMethod({
    method: 'POST',
    path: 'v5/boards/{board}/sections/',
    urlParams: ['board'],
    required: ['board']
  }),

  getBoardSections: pinterestMethod({
    method: 'GET',
    path: 'v5/boards/{board}/sections/',
    urlParams: ['board'],
    required: ['board']
  }),

  getBoardSectionPins: pinterestMethod({
    method: 'GET',
    path: 'v5/boards/{board}/sections/{section}/pins/',
    urlParams: ['board', 'section'],
    required: ['board', 'section']
  }),

  deleteBoardSection: pinterestMethod({
    method: 'DELETE',
    path: 'v5/boards/{board}/sections/{section}/',
    urlParams: ['board', 'section'],
    required: ['board', 'section']
  })
});
