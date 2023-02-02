'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  get: pinterestMethod({
    method: 'GET',
    path: 'v5/user_account'
  }),

  getAnalytics: pinterestMethod({
    method: 'GET',
    path: 'v5/user_account/analytics'
  }),

  getTopPinsAnalytics: pinterestMethod({
    method: 'GET',
    path: 'v5/user_account/analytics/top_pins'
  }),

  getTopVideoPinsAnalytics: pinterestMethod({
    method: 'GET',
    path: 'v5/user_account/analytics/top_video_pins'
  }),

});
