"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("boards.getAll()", function () {
  it("It should get all", async function () {
    try {
      var response = await pinterest.boards
        .get()
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

describe("boards.create()", function () {
  it("It should create", async function () {
    try {
      var response = await pinterest.boards
        .create()
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

describe("boards.get()", function () {
  it("It should get", async function () {
    try {
      var board_id = "";
      var response = await pinterest.boards
        .get(board_id)
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

describe("boards.update()", function () {
  it("It should update", async function () {
    try {
      var board_id = "";
      var response = await pinterest.boards
        .update(board_id)
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

describe("boards.delete()", function () {
  it("It should delete", async function () {
    try {
      var board_id = "";
      var response = await pinterest.boards
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

describe("boards.getAllSections()", function () {
  it("It should get all sections", async function () {
    try {
      var board_id = "";
      var response = await pinterest.boards
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

describe("boards.createSection()", function () {
  it("It should create", async function () {
    try {
      var board_id = "";
      var response = await pinterest.boards
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

describe("boards.updateSection()", function () {
  it("It should update", async function () {
    try {
      var board_id = "";
      var section_id = "";
      var response = await pinterest.boards
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

describe("boards.deleteSection()", function () {
  it("It should delete", async function () {
    try {
      var board_id = "";
      var section_id = "";
      var response = await pinterest.boards
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

describe("boards.getSectionPins()", function () {
  it("It should get section pins", async function () {
    try {
      var board_id = "";
      var section_id = "";
      var response = await pinterest.boards
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

describe("boards.getPins()", function () {
  it("It should get pins", async function () {
    try {
      var board_id = "";
      var response = await pinterest.boards
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