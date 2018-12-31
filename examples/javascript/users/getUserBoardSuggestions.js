'use strict';

var userToken = process.env.PINTEREST_USER_TOKEN;

var pinterest = require('../../../lib')(userToken);

var usersRequest = async function () {
  /**
   * passing parameters 
   * -------------------
   * 
   * pin (pass pin_id)
   * 
   * (optional)
   * count
   * 
   * fields (counts, created_at, creator, description, id, image, name, privacy, reason, url)
   */
  var data = {
    pin: '806144402026290934'
  };
  try {
    var response = await pinterest.users.getUserBoardSuggestions(data);
  } catch (error) {
    return;
  }
};

usersRequest();
