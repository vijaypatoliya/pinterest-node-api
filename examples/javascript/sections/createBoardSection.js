'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var sectionsRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * board (required) (The board ID)
   * title (required) (section name)
   * initial_pins (pin ID)
   */
  var board = '806144470738408510';
  var data = {
    title: 'test section',
    // initial_pins: '806144402026288820'
  };
  try {
    var response = await pinterest.sections.createBoardSection(board, data);
  } catch (error) {
    return;
  }
};

sectionsRequest();
