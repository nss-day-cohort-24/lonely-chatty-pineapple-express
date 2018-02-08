"use strict";

console.log("hello remove.js");
let messageArray = require("./messageInput");
console.log(messageArray.message);
let printDiv = document.getElementById('user-text');

document.querySelector("body").addEventListener("click", consoleLogEvent);

function consoleLogEvent(event) {
    if(event.target.className === 'remove'){
    console.log(event.target.id);
    messageArray.message.splice(event.target.id, 1);
    printDiv.innerHTML = messageArray.message.join('');
    console.log(messageArray.message);
}
}

document.addEventListener('keypress', logMessage);

function logMessage(){
    if(event.keyCode === 13){
    }
  }

module.exports = "test remove.js connection";