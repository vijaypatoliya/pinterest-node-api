'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var boardsRequest = async function () {
  var data = {};
  try {
    var response = await pinterest.boards.getUserBoards(data);
  } catch (error) {
    return;
  }
};

boardsRequest();
