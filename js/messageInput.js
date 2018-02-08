"use strict";
let message = [];
let userInput = document.getElementById('user-input');
let printDiv = document.getElementById('user-text');
document.addEventListener('keypress', pushMessage);

function pushMessage(){
  if(event.keyCode === 13){
      message.push(`${event.target.value}<button class="remove" id=${message.length}></button><br>`);
      printDiv.innerHTML += message[message.length - 1];
    // message.push(`${event.target.value}<button class="remove" id="${message.length}"</button>`);
    // printDiv.innerHTML += `<li>${message[message.length - 1]}</li>`;
    userInput.value = '';
  }
}


module.exports = {pushMessage, message};
