"use strict";

var userToken = process.env.PINTEREST_USER_TOKEN;

import * as PinterestAPI from 'pinterest-node-api';

const pinterest = new PinterestAPI();
pinterest.setUserToken(userToken);

var pinsRequest = async function () {
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
  }

  try {
    var response = await pinterest.catalogs.operateItemBatch({ query }, create || update || delete_discontinued);
  } catch (error) {
    return;
  }
};

pinsRequest();
