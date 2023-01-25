"use strict";

var pinterestResource = require("../Resource");
var pinterestMethod = pinterestResource.methods.pinterestMethod;

module.exports = pinterestResource.extend({
  getFeeds: pinterestMethod({
    method: "GET",
    path: "v5/catalogs/feeds",
  }),

  createFeed: pinterestMethod({
    method: "POST",
    path: "v5/catalogs/feeds"
  }),

  getFeed: pinterestMethod({
    method: "GET",
    path: "v5/catalogs/feeds/{feed_id}",
    urlParams: ["feed_id"],
    required: ["feed_id"],
  }),

  updateFeed: pinterestMethod({
    method: "PATCH",
    path: "v5/catalogs/feeds/{feed_id}",
    urlParams: ["feed_id"],
    required: ["feed_id"],
  }),

  deleteFeed: pinterestMethod({
    method: "DELETE",
    path: "v5/catalogs/feeds/{feed_id}",
    urlParams: ["feed_id"],
    required: ["feed_id"],
  }),

  getFeedProcessingResults: pinterestMethod({
    method: "GET",
    path: "v5/catalogs/feeds/{feed_id}/processing_results",
    urlParams: ["feed_id"],
    required: ["feed_id"],
  }),

  getFeedProcessingResultIssues: pinterestMethod({
    method: "GET",
    path: "v5/catalogs/processing_results/{processing_result_id}/item_issues",
    urlParams: ["processing_result_id"],
    required: ["processing_result_id"],
  }),

  getItems: pinterestMethod({
    method: "GET",
    path: "v5/catalogs/items",
  }),

  getItemsBatch: pinterestMethod({
    method: "GET",
    path: "v5/catalogs/items/batch/{batch_id}",
    urlParams: ["batch_id"],
    required: ["batch_id"],
  }),

  operateItemBatch: pinterestMethod({
    method: "POST",
    path: "v5/catalogs/items/batch",
  }),

  getFilteredProducts: pinterestMethod({
    method: "POST",
    path: "v5/catalogs/products/get_by_product_group_filters",
  }),

  getProductGroup: pinterestMethod({
    method: "GET",
    path: "v5/catalogs/product_groups/{product_group_id}",
    urlParams: ["product_group_id"],
    required: ["product_group_id"],
  }),

  deleteProductGroup: pinterestMethod({
    method: "DELETE",
    path: "v5/catalogs/product_groups/{product_group_id}",
    urlParams: ["product_group_id"],
    required: ["product_group_id"],
  }),

  updateProductGroup: pinterestMethod({
    method: "PATCH",
    path: "v5/catalogs/product_groups/{product_group_id}",
    urlParams: ["product_group_id"],
    required: ["product_group_id"],
  }),

  getProducts: pinterestMethod({
    method: "GET",
    path: "v5/catalogs/product_groups/{product_group_id}/products",
    urlParams: ["product_group_id"],
    required: ["product_group_id"],
  }),

  getProductCount: pinterestMethod({
    method: "GET",
    path: "v5/catalogs/product_groups/{product_group_id}/products_count",
    urlParams: ["product_group_id"],
    required: ["product_group_id"],
  }),

  getProductGroups: pinterestMethod({
    method: "GET",
    path: "v5/catalogs/product_groups",
  }),

  createProductGroup: pinterestMethod({
    method: "POST",
    path: "v5/catalogs/product_groups",
  }),
});
