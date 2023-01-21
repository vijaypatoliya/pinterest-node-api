'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var sectionsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * section (required) (The section ID)
   */
  var board = '867787490638395104'
  var section = '5007816082331826124';
  try {
    var response = await pinterest.sections.deleteBoardSection(board, section);
  } catch (error) {
    return;
  }
};

sectionsRequest();
