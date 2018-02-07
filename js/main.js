"use strict";

console.log("the main js has compiled to the dist/app js");

let firstFive = require("./firstFive");
let messageInput = require("./messageInput");
let remove = require("./remove");

console.log(`1. ${firstFive}, 2. ${messageInput}, 3. ${remove}`);