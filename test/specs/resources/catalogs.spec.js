"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("catalogs.getFeeds()", function () {
  it("It should get feeds", async function () {
    try {
      var response = await pinterest.catalogs
        .getFeeds()
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.createFeed()", function () {
  it("It should create feed", async function () {
    try {
      var response = await pinterest.catalogs
        .createFeed()
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.getFeed()", function () {
  it("It should get feed", async function () {
    try {
      var feed_id = "";
      var response = await pinterest.catalogs
        .getFeed(feed_id)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.updateFeed()", function () {
  it("It should update feed", async function () {
    try {
      var feed_id = "";
      var response = await pinterest.catalogs
        .updateFeed(feed_id)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.deleteFeed()", function () {
  it("It should delete feed", async function () {
    try {
      var feed_id = "";
      var response = await pinterest.catalogs
        .deleteFeed(feed_id)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.getFeedProcessingResultIssues()", function () {
  it("It should get feed processing result issues", async function () {
    try {
      var processing_result_id = "";
      var response = await pinterest.catalogs
        .getFeedProcessingResultIssues(processing_result_id)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.getItems()", function () {
  it("It should get items", async function () {
    try {
      var response = await pinterest.catalogs
        .getItems()
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.getItemsBatch()", function () {
  it("It should get items batch", async function () {
    try {
      var batch_id = ''
      var response = await pinterest.catalogs
        .getItemsBatch(batch_id)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.operateItemBatch()", function () {
  it("It should operate item batch", async function () {
    try {
      var response = await pinterest.catalogs
        .operateItemBatch()
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.getFilteredProducts()", function () {
  it("It should get filtered products", async function () {
    try {
      var response = await pinterest.catalogs
        .getFilteredProducts()
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.getProductGroup()", function () {
  it("It should get product group", async function () {
    try {
      var response = await pinterest.catalogs
        .getProductGroup()
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.deleteProductGroup()", function () {
  it("It should delete product group", async function () {
    try {
      var product_group_id = ''
      var response = await pinterest.catalogs
        .deleteProductGroup(product_group_id)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.updateProductGroup()", function () {
  it("It should update product group", async function () {
    try {
      var product_group_id = ''
      var response = await pinterest.catalogs
        .updateProductGroup(product_group_id)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.getProducts()", function () {
  it("It should get products", async function () {
    try {
      var product_group_id = ''
      var response = await pinterest.catalogs
        .getProducts(product_group_id)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.getProductCount()", function () {
  it("It should get product count", async function () {
    try {
      var product_group_id = ''
      var response = await pinterest.catalogs
        .getProductCount(product_group_id)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.getProductGroups()", function () {
  it("It should get product groups", async function () {
    try {
      var response = await pinterest.catalogs
        .getProductGroups()
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("catalogs.createProductGroup()", function () {
  it("It should create product group", async function () {
    try {
      var response = await pinterest.catalogs
        .createProductGroup()
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", response);
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});