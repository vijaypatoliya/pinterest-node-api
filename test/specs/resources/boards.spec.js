"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

describe("boards.list()", function () {
  it("It should get all", async function () {
    try {
      var query = {
        bookmark: String(),
        page_size: Number(),
        privacy: String(),
      };
      var response = await pinterest.boards.list({ query }).catch((error) => {
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

describe("boards.create()", function () {
  it("It should create", async function () {
    try {
      var payload = {
        name: "Summer Recipes",
        description: "My favorite summer recipes",
        privacy: "PUBLIC",
      };
      var response = await pinterest.boards.create(payload).catch((error) => {
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

describe("boards.get()", function () {
  it("It should get", async function () {
    try {
      var board_id = 12345;
      var response = await pinterest.boards.get(board_id).catch((error) => {
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

describe("boards.update()", function () {
  it("It should update", async function () {
    try {
      var payload = {
        name: "your board name",
        description: "your board description",
      };

      var board_id = 12345;
      var response = await pinterest.boards
        .update(board_id, payload)
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

describe("boards.delete()", function () {
  it("It should delete", async function () {
    try {
      var board_id = 12345;
      var response = await pinterest.boards.delete(board_id).catch((error) => {
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

describe("boards.getSections()", function () {
  it("It should get all sections", async function () {
    try {
      var board_id = 12345;
      var query = {
        bookmark: String(),
        page_size: Number(),
      };
      var response = await pinterest.boards
        .getSections(board_id, { query })
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

describe("boards.createSection()", function () {
  it("It should create", async function () {
    try {
      var payload = {
        name: String(),
      };

      var board_id = 12345;

      var response = await pinterest.boards
        .createSection(board_id, payload)
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

describe("boards.updateSection()", function () {
  it("It should update", async function () {
    try {
      var payload = {
        name: String(),
      };

      var board_id = 12345;
      var section_id = 12345;

      var response = await pinterest.boards
        .updateSection(board_id, section_id, payload)
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

describe("boards.deleteSection()", function () {
  it("It should delete", async function () {
    try {
      var board_id = 12345;
      var section_id = 12345;
      var response = await pinterest.boards
        .deleteSection(board_id, section_id)
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

describe("boards.getSectionPins()", function () {
  it("It should get section pins", async function () {
    try {
      var board_id = 12345;
      var section_id = 12345;
      var query = {
        bookmark: String(),
        page_size: Number(),
      };
      var response = await pinterest.boards
        .getSectionPins(board_id, section_id, { query })
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

describe("boards.getPins()", function () {
  it("It should get pins", async function () {
    try {
      var board_id = 12345;
      var query = {
        bookmark: String(),
        page_size: Number(),
      };
      var response = await pinterest.boards
        .getPins(board_id, { query })
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
