'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var sectionsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * section (required) (The section name in the format: <username>/<board_name>/<section_name>)
   */
  var board = "867787490638395104";
  var section = "5277099961081714743";
  try {
    var response = await pinterest.sections.getBoardSectionPins(board, section);
  } catch (error) {
    return;
  }
};

sectionsRequest();
