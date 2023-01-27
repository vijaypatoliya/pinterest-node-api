"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("audiences.getAll()", function () {
  it("It should get all", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.audiences
        .getAll(ad_account_id)
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

describe("audiences.create()", function () {
  it("It should create", async function () {
    try {
      var ad_account_id = ''
      var response = await pinterest.audiences
        .create(ad_account_id)
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

describe("audiences.get()", function () {
  it("It should get", async function () {
    try {
      var ad_account_id = '';
      var audience_id = "";
      var response = await pinterest.audiences
        .get(ad_account_id, audience_id)
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

describe("audiences.update()", function () {
  it("It should update", async function () {
    try {
      var ad_account_id = '';
      var audience_id = "";
      var response = await pinterest.audiences
        .update(ad_account_id, audience_id)
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

describe("audiences.delete()", function () {
  it("It should delete", async function () {
    try {
      var board_id = "";
      var response = await pinterest.audiences
        .delete(board_id)
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

describe("audiences.getAllSections()", function () {
  it("It should get all sections", async function () {
    try {
      var board_id = "";
      var response = await pinterest.audiences
        .getAllSections(board_id)
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

describe("audiences.createSection()", function () {
  it("It should create", async function () {
    try {
      var board_id = "";
      var response = await pinterest.audiences
        .createSection(board_id)
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

describe("audiences.updateSection()", function () {
  it("It should update", async function () {
    try {
      var board_id = "";
      var section_id = "";
      var response = await pinterest.audiences
        .updateSection(board_id, section_id)
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

describe("audiences.deleteSection()", function () {
  it("It should delete", async function () {
    try {
      var board_id = "";
      var section_id = "";
      var response = await pinterest.audiences
        .deleteSection(board_id, section_id)
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

describe("audiences.getSectionPins()", function () {
  it("It should get section pins", async function () {
    try {
      var board_id = "";
      var section_id = "";
      var response = await pinterest.audiences
        .getSectionPins(board_id, section_id)
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

describe("audiences.getPins()", function () {
  it("It should get pins", async function () {
    try {
      var board_id = "";
      var response = await pinterest.audiences
        .getPins(board_id)
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