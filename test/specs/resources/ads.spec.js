"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("ads.getTargetedAnalytics()", function () {
  it("It should get targeted analytics", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        ad_ids: Array(String()),
        start_date: String(Date()),
        end_date: String(Date()),
        targeting_types: Array(String()),
        columns: Array(String()),
        granularity: String(),
        click_window_days: Number(),
        engagement_window_days: Number(),
        view_window_days: Number(),
        conversion_report_time: String(),
        attribution_types: String(),
      };

      var response = await pinterest.ads
        .getTargetedAnalytics(ad_account_id, { query })
        .catch((error) => {
          if (error) {
            return;
          }
        });

      expect(response).to.be.a("object");
 } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
});

describe("ads.list()", function () {
  it("It should get all", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        campaign_ids: Array(String()),
        ad_group_ids: Array(String()),
        ad_ids: Array(String()),
        entity_statuses: Array(String()),
        entity_statuses: Array(String()),
        page_size: Number(),
        order: String(),
        bookmark: String(),
      };
      var response = await pinterest.ads
        .list(ad_account_id, { query })
        .catch((error) => {
          if (error) {
            return;
          }
        });

      expect(response).to.be.a("object");
 } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
});

describe("ads.create()", function () {
  it("It should create", async function () {
    try {
      var ad_account_id = 12345;
      var payload = [
        {
          ad_group_id: "2680059592705",
          android_deep_link: "string",
          carousel_android_deep_links: ["string"],
          carousel_destination_urls: ["string"],
          carousel_ios_deep_links: ["string"],
          click_tracking_url: "string",
          creative_type: "REGULAR",
          destination_url: "string",
          ios_deep_link: "string",
          is_pin_deleted: false,
          is_removable: false,
          name: "string",
          status: "ACTIVE",
          tracking_urls: {
            impression: ["URL1", "URL2"],
            click: ["URL1", "URL2"],
            engagement: ["URL1", "URL2"],
            buyable_button: ["URL1", "URL2"],
            audience_verification: ["URL1", "URL2"],
          },
          view_tracking_url: "string",
          pin_id: "394205773611545468",
        },
      ];
      var response = await pinterest.ads
        .create(ad_account_id, payload)
        .catch((error) => {
          if (error) {
            return;
          }
        });

      expect(response).to.be.a("object");
 } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
});

describe("ads.update()", function () {
  it("It should update", async function () {
    try {
      var payload = [
        {
          ad_group_id: "2680059592705",
          android_deep_link: "string",
          carousel_android_deep_links: ["string"],
          carousel_destination_urls: ["string"],
          carousel_ios_deep_links: ["string"],
          click_tracking_url: "string",
          creative_type: "REGULAR",
          destination_url: "string",
          ios_deep_link: "string",
          is_pin_deleted: false,
          is_removable: false,
          name: "string",
          status: "ACTIVE",
          tracking_urls: {
            impression: ["URL1", "URL2"],
            click: ["URL1", "URL2"],
            engagement: ["URL1", "URL2"],
            buyable_button: ["URL1", "URL2"],
            audience_verification: ["URL1", "URL2"],
          },
          view_tracking_url: "string",
          id: "687195134316",
        },
      ];
      var ad_account_id = 12345;
      var response = await pinterest.ads
        .update(ad_account_id, payload)
        .catch((error) => {
          if (error) {
            return;
          }
        });

      expect(response).to.be.a("object");
 } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
});

describe("ads.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = 12345;
      var ads_id = 12345;
      var response = await pinterest.ads
        .get(ad_account_id, ads_id)
        .catch((error) => {
          if (error) {
            return;
          }
        });

      expect(response).to.be.a("object");
 } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
});

describe("ads.getAnalytics()", function () {
  it("It should get analytics", async function () {
    try {
      var ad_account_id = 12345;
      var query = {
        start_date: String(Date()),
        end_date: String(Date()),
        ad_ids: Array(String()),
        columns: Array(String()),
        granularity: String(),
        click_window_days: Number(),
        engagement_window_days: Number(),
        view_window_days: Number(),
        conversion_report_time: String(),
      };
      var response = await pinterest.ads
        .getAnalytics(ad_account_id, { query })
        .catch((error) => {
          if (error) {
            return;
          }
        });

      expect(response).to.be.a("object");
 } catch (error) {
      expect(response).to.be.a(undefined);
    }
  });
});

describe("ads.createPreview()", function () {
  it("It should create preview", async function () {
    try {
      var ad_account_id = 12345;
      var createFromImgPayload = {
        image_url: "https://somewebsite.com/someimage.jpg",
        title: "My Preview Image",
      };

      var createFromPinPayload = {
        pin_id: "7389479023",
      };
      var createFromImgResponse = await pinterest.ads
        .createPreview(ad_account_id, createFromImgPayload)
        .catch((error) => {
          if (error) {
            return;
          }
        });
      expect(createFromImgResponse).to.be.a("object");
      var createFromPinResponse = await pinterest.ads
        .createPreview(ad_account_id, createFromPinPayload)
        .catch((error) => {
          if (error) {
            return;
          }
        });
      expect(createFromPinResponse).to.be.a("object");
 } catch (error) {
      expect(createFromImgResponse).to.be.a(undefined);
    }
  });
});
