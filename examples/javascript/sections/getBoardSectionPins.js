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
  var section = 'pideveloper/board-2/lighting';
  try {
    var response = await pinterest.sections.getBoardSectionPins(section);
  } catch (error) {
    return;
  }
};

sectionsRequest();
