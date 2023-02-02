'use strict';

var pinterestResource = require('../Resource');
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({

  getAdAccountCountries: pinterestMethod({
    method: 'GET',
    path: 'v5/resources/ad_account_countries',
  }),

  getAvailableMetrics: pinterestMethod({
    method: 'GET',
    path: 'v5/resources/delivery_metrics',
  }),

  getMetricsReadyState: pinterestMethod({
    method: 'GET',
    path: 'v5/resources/metrics_ready_state',
  }),

  getInterest: pinterestMethod({
    method: 'GET',
    path: 'v5/resources/targeting/interests/{interest_id}',
    urlParams: ['interest_id'],
    required: ['interest_id']
  }),

  getTargetingOptions: pinterestMethod({
    method: 'GET',
    path: 'v5/resources/targeting/{targeting_type}',
    urlParams: ['targeting_type'],
    required: ['targeting_type']
  }),

});
