"use strict";

let message = [];

let userInput = document.getElementById('user-input');
let printDiv = document.getElementById('user-text');

document.addEventListener('keypress', pushPrintAndId);

function pushPrintAndId(event){
  if(event.keyCode === 13){
    message.push(event.target.value);
    console.log(message);
    printDiv.innerHTML +=`<p>${message[message.length - 1]}</p>`;
    userInput.value = '';
  }
}


module.exports = pushPrintAndId;