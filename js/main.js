"use strict";



console.log("the main js has compiled to the dist/app js");

let firstFive = require("./firstFive");
let messageInput = require("./messageInput");
let remove = require("./remove");
let darkTheme = require("./toggle");
let biggerText = require("./toggle");

let pushMessage = messageInput.pushMessage;
let getMessage = messageInput.getMessage;
let messageCollect = messageInput.messageCollect;

// console.log(`1. ${firstFive}, 2. ${messageInput}, 3. ${remove}, 4.${darkTheme}`);

