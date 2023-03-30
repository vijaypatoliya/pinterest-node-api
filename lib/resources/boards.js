'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  list: pinterestMethod({
    method: 'GET',
    path: 'v5/boards'
  }),

  create: pinterestMethod({
    method: 'POST',
    path: 'v5/boards'
  }),

  get: pinterestMethod({
    method: 'GET',
    path: 'v5/boards/{board_id}',
    urlParams: ['board_id'],
    required: ['board_id']
  }),

  update: pinterestMethod({
    method: 'PATCH',
    path: 'v5/boards/{board_id}',
    urlParams: ['board_id'],
    required: ['board_id']
  }),

  delete: pinterestMethod({
    method: 'DELETE',
    path: 'v5/boards/{board_id}',
    urlParams: ['board_id'],
    required: ['board_id']
  }),

  getSections: pinterestMethod({
    method: 'GET',
    path: 'v5/boards/{board_id}/sections',
    urlParams: ['board_id'],
    required: ['board_id']
  }),

  createSection: pinterestMethod({
    method: 'POST',
    path: 'v5/boards/{board_id}/sections',
    urlParams: ['board_id'],
    required: ['board_id']
  }),

  updateSection: pinterestMethod({
    method: 'PATCH',
    path: 'v5/boards/{board_id}/sections/{section_id}',
    urlParams: ['board_id', 'section_id'],
    required: ['board_id', 'section_id']
  }),

  deleteSection: pinterestMethod({
    method: 'DELETE',
    path: 'v5/boards/{board_id}/sections/{section_id}',
    urlParams: ['board_id', 'section_id'],
    required: ['board_id', 'section_id']
  }),

  getSectionPins: pinterestMethod({
    method: 'GET',
    path: 'v5/boards/{board_id}/sections/{section_id}/pins',
    urlParams: ['board_id', 'section_id'],
    required: ['board_id', 'section_id']
  }),

  getPins: pinterestMethod({
    method: 'GET',
    path: 'v5/boards/{board_id}/pins',
    urlParams: ['board_id'],
    required: ['board_id']
  }),

});
