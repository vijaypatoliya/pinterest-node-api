'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var sectionsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * board (required) (The board ID)
   */
  var board = '806144470738408510';
  try {
    var response = await pinterest.sections.getBoardSections(board);
  } catch (error) {
    return;
  }
};

sectionsRequest();
