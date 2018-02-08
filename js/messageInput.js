"use strict";
let message = [];
let userInput = document.getElementById('user-input');
let printDiv = document.getElementById('user-text');
document.addEventListener('keypress', pushMessage);
document.querySelector("body").addEventListener("click", consoleLogEvent);

let messageId = document.getElementsByClassName('message');

function consoleLogEvent(event) {
    console.log(event.target.innerText);
}

function pushMessage(){
  if(event.keyCode === 13){
    message.push(event.target.value);
    printDiv.innerHTML += `<p class="message">${message[message.length - 1]}<button class="delete"></button></p>`;
    userInput.value = '';
  }
}


module.exports = {pushMessage,consoleLogEvent};