'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  createBoardSection: pinterestMethod({
    method: 'PUT',
    path: 'v1/board/{board}/sections/',
    urlParams: ['board'],
    required: ['board']
  }),

  getBoardSections: pinterestMethod({
    method: 'GET',
    path: 'v1/board/{board}/sections/',
    urlParams: ['board'],
    required: ['board']
  }),

  getBoardSectionPins: pinterestMethod({
    method: 'GET',
    path: 'v1/board/sections/{section}/pins/',
    urlParams: ['section'],
    required: ['section']
  }),

  deleteBoardSection: pinterestMethod({
    method: 'DELETE',
    path: 'v1/board/sections/{section}/',
    urlParams: ['section'],
    required: ['section']
  })
});
