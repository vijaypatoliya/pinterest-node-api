# pinterest-node-api (Pinterest Node Rest API)
[![Build Status](https://travis-ci.org/vijaypatoliya/pinterest-node-api.svg?branch=master)](https://travis-ci.org/vijaypatoliya/pinterest-node-api) [![Stackoverflow Thread](https://img.shields.io/badge/stackoverflow-pinterest--node--api-yellowgreen.svg)](https://stackoverflow.com/search?q=nodejs-pinterest-node-api)

This API supported Pinterest standard REST API that accepts/returns JSON requests. Here is the [API reference] (https://developers.pinterest.com/docs/api/overview/)

You can find [examples of JavaScript](https://github.com/vijaypatoliya/pinterest-node-api/tree/master/examples). This will help you for faster implementation of Pinterest APIs.

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
