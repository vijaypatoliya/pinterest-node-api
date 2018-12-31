'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  getUserOwnInfo: pinterestMethod({
    method: 'GET',
    path: 'v1/me/'
  }),

  getUserBoards: pinterestMethod({
    method: 'GET',
    path: 'v1/me/boards/'
  }),

  getUserBoardSuggestions: pinterestMethod({
    method: 'GET',
    path: 'v1/me/boards/suggested/'
  }),

  getUserPins: pinterestMethod({
    method: 'GET',
    path: 'v1/me/pins/'
  }),

  searchUserBoards: pinterestMethod({
    method: 'GET',
    path: 'v1/me/search/boards/'
  }),

  searchUserPins: pinterestMethod({
    method: 'GET',
    path: 'v1/me/search/pins/'
  }),

  followBoard: pinterestMethod({
    method: 'POST',
    path: 'v1/me/following/boards/'
  }),

  followUser: pinterestMethod({
    method: 'POST',
    path: 'v1/me/following/users/'
  }),

  getUserFollowers: pinterestMethod({
    method: 'GET',
    path: 'v1/me/followers/'
  }),

  getUserFollowingBoards: pinterestMethod({
    method: 'GET',
    path: 'v1/me/following/boards/'
  }),

  getUserFollowingInterests: pinterestMethod({
    method: 'GET',
    path: 'v1/me/following/interests/'
  }),

  getUserFollowingUsers: pinterestMethod({
    method: 'GET',
    path: 'v1/me/following/users/'
  }),

  unfollowBoard: pinterestMethod({
    method: 'DELETE',
    path: 'v1/me/following/boards/{board}/',
    urlParams: ['board'],
    required: ['board']
  }),

  unfollowUser: pinterestMethod({
    method: 'DELETE',
    path: 'v1/me/following/users/{user}/',
    urlParams: ['user'],
    required: ['user']
  }),

  getUserInfo: pinterestMethod({
    method: 'GET',
    path: 'v1/users/{user}/',
    urlParams: ['user'],
    required: ['user']
  })
});
