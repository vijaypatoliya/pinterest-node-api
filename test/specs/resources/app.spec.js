"use strict";

var config = require("../../intialize/config");
var userToken = config.USER_TOKEN;

var chai = require("chai");
var expect = chai.expect;

var pinterest = require("../../../lib")(userToken);

var base64Encoded = require('../data.json').base64Encoded;

describe('GetUserOwnInfo', function () {
  it('It should get the logged in user\'s information', async function () {
    var data = {};
    try {
      var response = await pinterest.users.getUserOwnInfo(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetUserBoards', function () {
  it('It should get the logged in user\'s boards', async function () {
    var data = {};
    try {
      var response = await pinterest.users.getUserBoards(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', JSON.stringify(response, null, 4));
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('CreateBoard', function () {
  it('It should create board', async function () {
    var data = {
      name: 'test board' + new Date().getTime(),
      description: 'it\'s a test board'
    };
    try {
      var response = await pinterest.boards.createBoard(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetBoard', function () {
  it('It should retrieve information about a Board', async function () {
    var board = '867787490638395104';
    try {
      var response = await pinterest.boards.getBoard(board).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetBoardPins', function () {
  it('It should retrieve the Pins on a Board', async function () {
    var board = '867787490638395104';
    try {
      var response = await pinterest.boards.getBoardPins(board).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("GetUserBoards", function () {
  it("It should get the logged in user's boards", async function () {
    var data = {};
    try {
      var response = await pinterest.boards
        .getUserBoards(data)
        .catch((error) => {
          if (error) {
            console.log("error ", error);
            return;
          }
        });
      console.log("response", JSON.stringify(response));
      expect(response).to.be.a("object");
    } catch (error) {
      console.log("error ", error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UpdateBoard', function () {
  it('It should edit a Board', async function () {
    var data = {
      name: 'Board 11',
      description: 'it\'s a board no 11.'
    };
    var board = '867787490638395104';
    try {
      var response = await pinterest.boards.updateBoard(board, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('DeleteBoard', function () {
  it('It should delete a Board', async function () {
    var board = '867787490638395854';
    try {
      var response = await pinterest.boards.deleteBoard(board).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("CreatePin", function () {
  it("It should create a pin", async function () {
    var data = {
      link: "https://www.pinterest.com/",
      title: "Test pin",
      description: "Test pin",
      dominant_color: "#6E7874",
      alt_text: "Sample text",
      board_id: "867787490638395104",
      board_section_id: "5277099961081714743",
      media_source: {
        source_type: "image_base64",
        content_type: "image/jpeg",
        data: base64Encoded,
      },
      parent_pin_id: "867787421927713910",
    };
    try {
      var response = await pinterest.pins.createPin(data).catch((error) => {
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

describe("GetPin", function () {
  it("It should return information about a Pin", async function () {
    var pin = "867787421927731533";
    try {
      var response = await pinterest.pins.getPin(pin).catch((error) => {
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

describe('GetBoardPins', function () {
  it('It should retrieve the Pins on a Board', async function () {
    var board = '867787490638395104';
    try {
      var response = await pinterest.pins.getBoardPins(board).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', JSON.stringify(response, null, 4));
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('DeletePin', function () {
  it('It should delete a Pin', async function () {
    var pin = '806144402027821208';
    try {
      var response = await pinterest.pins.deletePin(pin).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('CreateBoardSection', function () {
  it('It should creates a new board section', async function () {
    var board = '867787490638395104';
    var data = {
      name: 'test_section'
    };
    try {
      var response = await pinterest.sections.createBoardSection(board, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetBoardSections', function () {
  it('It should gets sections for a board', async function () {
    var board = '867787490638395104';
    try {
      var response = await pinterest.sections.getBoardSections(board).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe("GetBoardSectionPins", function () {
  it("It should gets the pins for a board section", async function () {
    var board = "867787490638395104";
    var section = "5277099961081714743";
    try {
      var response = await pinterest.sections
        .getBoardSectionPins(board, section)
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

describe('DeleteBoardSection', function () {
  it('It should deletes a board section', async function () {
    var board = 'board_id';
    var section = 'section_id';
    try {
      var response = await pinterest.sections.deleteBoardSection(board, section).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});
