# pinterest-node-api (Pinterest Node Rest API)
[![Build Status](https://travis-ci.org/vijaypatoliya/pinterest-node-api.svg?branch=master)](https://travis-ci.org/vijaypatoliya/pinterest-node-api) [![Stackoverflow Thread](https://img.shields.io/badge/stackoverflow-pinterest--node--api-yellowgreen.svg)](https://stackoverflow.com/search?q=nodejs-pinterest-node-api)

This API supported Pinterest standard REST API that accepts/returns JSON requests. Here is the [API reference] (https://developers.pinterest.com/docs/api/overview/)

You can find [examples of JavaScript And TypeScript](https://github.com/vijaypatoliya/pinterest-node-api/tree/master/examples). This will help you for faster implementation of Pinterest APIs.

##### It does supports EcmaScript 5, EcmaScript 6,  EcmaScript 8, TypeScript, async-await, Promises, Callback!!!
##### It does also supports for AWS Lambda like serverless cloud function call.
##### It supports pure JSON response.
##### All methods support Promise and Callback both.

## Get started
Using the Pinterest API wrapper for Node.js is really simple.
Given that you already have a Node.js project with NPM setup just follow these steps:

**Install the dependency**
```
npm install --save pinterest-node-api
```

## Get Access Token From Using Below Link and Overview Details
  [https://developers.pinterest.com/docs/api/overview/](https://developers.pinterest.com/docs/api/overview/)

## Configuration Using JavaScript

```bash
export PINTEREST_USER_TOKEN=ACCESS_TOKEN
```

```js
var pinterest = require('pinterest-node-api')('YOUR_ACCESS_TOKEN');
```

## Configuration Using TypeScript
```js
import * as PinterestAPI from 'pinterest-node-api';
const pinterest = new PinterestAPI();
pinterest.setUserToken('YOUR_ACCESS_TOKEN');
```

## Test Cases
```bash
npm run test.mocha
```

## Debugging
```bash
export DEBUG=pinterest:*
```

```
Originally by [Vijay Patoliya](https://github.com/vijaypatoliya) (osi.vijay@gmail.com).
```

## Examples

#### Users
    Get own information
    /* Return the logged in user's information */

    pinterest.setUserToken(userToken);
    var data = {};
    try {
        var response = pinterest.users.getUserOwnInfo(data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get boards list
    /* Return the logged in user's Boards */

    pinterest.setUserToken(userToken);
    var data = {};
    try {
        var response = pinterest.users.getUserBoards(data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Follow a Board
    /* Follow a Board */

    pinterest.setUserToken(userToken);
    var data = {
      board: '4teebeat/bodybuilding-t-shirts'
    };
    try {
        var response = pinterest.users.followBoard(data);
    } catch (error) {
        return;
    }


  #### Boards
    Create a Board
    /* Create a Board */
    
    pinterest.setUserToken(userToken);
    var data = {
      name: 'test board',
      description: 'it\'s a test board'
    };
    try {
        var response = pinterest.boards.createBoard(data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get board's information
    /* Retrieve information about a Board */

    pinterest.setUserToken(userToken);
    var board = 'pideveloper/test-board';
    try {
        var response = pinterest.boards.getBoard(board);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get board's pins list
    /* Retrieve the Pins on a Board */

    pinterest.setUserToken(userToken);
    var board = 'pideveloper/test-board';
    try {
        var response = pinterest.boards.getBoardPins(board);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get boards list
    /* Return the logged in user's Boards */

    pinterest.setUserToken(userToken);
    var data = {};
    try {
        var response = pinterest.boards.getUserBoards(data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Edit a board
    /* Edit a Board */

    pinterest.setUserToken(userToken);
    var data = {
      name: 'Board 11',
      description: 'it\'s a board no 11.'
    };
    var board = 'pideveloper/test-board';
    try {
        var response = pinterest.boards.updateBoard(board, data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Edit a board
    /* Edit a Board */

    pinterest.setUserToken(userToken);
    var board = 'pideveloper/board-11';
    try {
        var response = pinterest.boards.deleteBoard(board);
    } catch (error) {
        return;
    }

  #### Pins
    Create a Pin
    /* Create a Pin */

    pinterest.setUserToken(userToken);
    var data = {
      board: 'pideveloper/board-2',
      note: 'it\'s a test pin desc.',
      image_url: 'https://localhost:8080/aerospace-engineering.jpg'
    };
    try {
        var response = pinterest.pins.createPin(data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get pin information
    /* Return information about a Pin */

    pinterest.setUserToken(userToken);
    var pin = '806144402027821208';
    try {
        var response = pinterest.pins.getPin(pin);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get board's pins list
    /* Retrieve the Pins on a Board */

    pinterest.setUserToken(userToken);
    var board = 'pideveloper/test-board';
    try {
        var response = pinterest.pins.getBoardPins(board);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Delete a Pin
    /* Delete a Pin */

    pinterest.setUserToken(userToken);
    var pin = '806144402027821208';
    try {
        var response = pinterest.pins.deletePin(pin);
    } catch (error) {
        return;
    }

  #### Sections
    Create a section of board
    /* Creates a new board section */

    pinterest.setUserToken(userToken);
    var board = '806144470738408510';
    var data = {
      name: 'test section'
    };
    try {
        var response = pinterest.sections.createBoardSection(board, data);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get board's sections list
    /* Gets sections for a board */

    pinterest.setUserToken(userToken);
    var board = '806144470738408510';
    try {
        var response = pinterest.sections.getBoardSections(board);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Get pins of board section
    /* Gets the pins for a board section */

    pinterest.setUserToken(userToken);
    var board = "board_id";
    var section = "section_id";
    try {
        var response = pinterest.sections.getBoardSectionPins(board, section);
    } catch (error) {
        return;
    }
    -------------------------------------------------------------------------------------
    Delete a board section
    /* Deletes a board section */

    pinterest.setUserToken(userToken);
    var board = '867787490638395104';
    var section = '5007816082331826124';
    try {
        var response = pinterest.sections.deleteBoardSection(board, section);
    } catch (error) {
        return;
    }
