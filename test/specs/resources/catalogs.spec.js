"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("catalogs.getFeeds()", function () {
  it("It should get feeds", async function () {
    try {
      var query = {
        bookmark: String(),
        page_size: Number(),
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .getFeeds({ query })
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
      var payload = {
        default_country: "US",
        default_availability: "IN_STOCK",
        default_currency: "USD",
        name: "string",
        format: "TSV",
        default_locale: "en_US",
        credentials: {
          password: "pa$$word",
          username: "string",
        },
        location: "string",
        preferred_processing_schedule: {
          time: "02:59",
          timezone: "Africa/Abidjan",
        },
      };
      var query = {
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .createFeed({ query }, payload)
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
      var feed_id = String();
      var query = {
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .getFeed(feed_id, { query })
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
      var feed_id = String();
      var payload = {
        default_availability: "IN_STOCK",
        default_currency: "USD",
        name: "string",
        format: "TSV",
        credentials: {
          password: "pa$$word",
          username: "string",
        },
        location: "string",
        preferred_processing_schedule: {
          time: "02:59",
          timezone: "Africa/Abidjan",
        },
        status: "ACTIVE",
      };
      var query = {
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .updateFeed(feed_id, { query }, payload)
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
      var feed_id = String();
      var query = {
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .deleteFeed(feed_id, { query })
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
      var processing_result_id = String();
      var query = {
        bookmark: String(),
        page_size: Number(),
        item_numbers: Array(Number()),
        item_validation_issue: String(),
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .getFeedProcessingResultIssues(processing_result_id, { query })
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

describe("catalogs.getFeedProcessingResults()", function () {
  it("It should get feed processing results", async function () {
    try {
      var feed_id = String();
      var query = {
        bookmark: String(),
        page_size: Number(),
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .getFeedProcessingResults(feed_id, { query })
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
      var query = {
        country: String(),
        item_ids: Array(String()),
        language: String(),
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .getItems({ query })
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
      var batch_id = String();
      var query = {
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .getItemsBatch(batch_id, { query })
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
      var update = {
        country: "US",
        language: "EN",
        operation: "UPDATE",
        items: [
          {
            item_id: "DS0294-M",
            attributes: {
              ad_link:
                "https://www.example.com/cat/denim-shirt/item012?utm_source=Pinterest",
              adult: true,
              age_group: "newborn",
              availability: "in stock",
              average_review_rating: 5,
              brand: "Josie’s Denim",
              checkout_enabled: false,
              color: "blue",
              condition: "new",
              custom_label_0: "Best sellers",
              custom_label_1: "Summer promotion",
              custom_label_2: "Winter sales",
              custom_label_3: "Woman dress",
              custom_label_4: "Man hat",
              description:
                "Casual fit denim shirt made with the finest quality Japanese denim.",
              free_shipping_label: true,
              free_shipping_limit: "35 USD",
              gender: "unisex",
              google_product_category:
                "Apparel & Accessories > Clothing > Shirts & Tops",
              gtin: 3234567890126,
              id: "DS0294-L",
              item_group_id: "DS0294",
              last_updated_time: 1641483432072,
              link: "https://www.example.com/cat/womens-clothing/denim-shirt-0294",
              material: "cotton",
              min_ad_price: "19.99 USD",
              mobile_link:
                "https://m.example.com/cat/womens-clothing/denim-shirt-0294",
              mpn: "PI12345NTEREST",
              number_of_ratings: 10,
              number_of_reviews: 10,
              pattern: "plaid",
              price: "24.99 USD",
              product_type: "Clothing > Women’s > Shirts > Denim",
              sale_price: "14.99 USD",
              shipping: "US:CA:Ground:0 USD",
              shipping_height: "12 in",
              shipping_weight: "3 kg",
              shipping_width: "16 in",
              size: "M",
              size_system: "US",
              size_type: "regular",
              tax: "US:1025433:6.00:y",
              title: "Women’s denim shirt, large",
              variant_names: ["Color", "Size"],
              variant_values: ["Red", "Small"],
            },
          },
        ],
      };
      var create = {
        country: "US",
        language: "EN",
        operation: "CREATE",
        items: [
          {
            item_id: "DS0294-M",
            attributes: {
              additional_image_link: [
                "https://scene.example.com/image/image_v2.jpg",
                "https://scene.example.com/image/image_v3.jpg",
              ],
              image_link: ["https://scene.example.com/image/image.jpg"],
              ad_link:
                "https://www.example.com/cat/denim-shirt/item012?utm_source=Pinterest",
              adult: true,
              age_group: "newborn",
              availability: "in stock",
              average_review_rating: 5,
              brand: "Josie’s Denim",
              checkout_enabled: false,
              color: "blue",
              condition: "new",
              custom_label_0: "Best sellers",
              custom_label_1: "Summer promotion",
              custom_label_2: "Winter sales",
              custom_label_3: "Woman dress",
              custom_label_4: "Man hat",
              description:
                "Casual fit denim shirt made with the finest quality Japanese denim.",
              free_shipping_label: true,
              free_shipping_limit: "35 USD",
              gender: "unisex",
              google_product_category:
                "Apparel & Accessories > Clothing > Shirts & Tops",
              gtin: 3234567890126,
              id: "DS0294-L",
              item_group_id: "DS0294",
              last_updated_time: 1641483432072,
              link: "https://www.example.com/cat/womens-clothing/denim-shirt-0294",
              material: "cotton",
              min_ad_price: "19.99 USD",
              mobile_link:
                "https://m.example.com/cat/womens-clothing/denim-shirt-0294",
              mpn: "PI12345NTEREST",
              number_of_ratings: 10,
              number_of_reviews: 10,
              pattern: "plaid",
              price: "24.99 USD",
              product_type: "Clothing > Women’s > Shirts > Denim",
              sale_price: "14.99 USD",
              shipping: "US:CA:Ground:0 USD",
              shipping_height: "12 in",
              shipping_weight: "3 kg",
              shipping_width: "16 in",
              size: "M",
              size_system: "US",
              size_type: "regular",
              tax: "US:1025433:6.00:y",
              title: "Women’s denim shirt, large",
              variant_names: ["Color", "Size"],
              variant_values: ["Red", "Small"],
            },
          },
        ],
      };
      var delete_discontinued = {
        country: "US",
        language: "EN",
        operation: "DELETE_DISCONTINUED",
        items: [
          {
            item_id: "DS0294-M",
          },
        ],
      };
      var query = {
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .operateItemBatch({ query }, create || update || delete_discontinued)
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
      var payload = {
        feed_id: "2680059592705",
        filters: {
          any_of: [
            {
              MIN_PRICE: {
                inclusion: true,
                values: 0,
                negated: false,
              },
            },
          ],
        },
      };
      var query = {
        bookmark: String(),
        page_size: Number(),
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .getFilteredProducts({ query }, payload)
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
      var product_group_id = String();
      var query = {
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .getProductGroup(product_group_id, { query })
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
      var product_group_id = String();
      var query = {
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .deleteProductGroup(product_group_id, { query })
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
      var product_group_id = String();
      var query = {
        ad_account_id: String(),
      };
      var payload = {
        name: "string",
        description: "string",
        is_featured: true,
        filters: {
          any_of: [
            {
              MIN_PRICE: {
                inclusion: true,
                values: 0,
                negated: false,
              },
            },
          ],
        },
      };
      var response = await pinterest.catalogs
        .updateProductGroup(product_group_id, { query }, payload)
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
      var product_group_id = String();
      var query = {
        bookmark: String(),
        page_size: Integer(),
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .getProducts(product_group_id, { query })
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
      var product_group_id = String();
      var query = {
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .getProductCount(product_group_id, { query })
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
      var query = {
        feed_id: String(),
        bookmark: String(),
        page_size: Number(),
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .getProductGroups({ query })
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
      var payload = {
        name: "string",
        description: "string",
        is_featured: false,
        filters: {
          any_of: [
            {
              MIN_PRICE: {
                inclusion: true,
                values: 0,
                negated: false,
              },
            },
          ],
        },
        feed_id: "2680059592705",
      };
      var query = {
        ad_account_id: String(),
      };
      var response = await pinterest.catalogs
        .createProductGroup({ query }, payload)
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
