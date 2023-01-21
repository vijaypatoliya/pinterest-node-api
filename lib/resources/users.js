'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  getUserOwnInfo: pinterestMethod({
    method: 'GET',
    path: 'v5/user_account/'
  }),

  getUserBoards: pinterestMethod({
    method: 'GET',
    path: 'v5/boards/'
  }),

  followBoard: pinterestMethod({
    method: 'POST',
    path: 'v5/following/boards/'
  })

});
