"use strict";
let counter = 0;
let messageCollect = [];
let userInput = document.getElementById('user-input');
let printDiv = document.getElementById('user-text');
document.addEventListener('keypress', getMessage);
document.getElementById('clearAll').addEventListener('click', clearAll);

// document.getElementById('list').addEventListener('click', showList);
 
function showList(){
    printDiv.innerHTML = messageCollect.join('');
}

function clearAll() {
    // message = [];
    printDiv.innerHTML = '';
    // console.log(message);
}

function getMessage(){
    if(event.keyCode === 13){
    console.log(event.target.value);
    var message = event.target.value;
    var id = Math.random();
    pushMessage(message,id);
    }
}

function pushMessage(event, name){
    messageCollect.push(
        {
        message: event,
        identifier: name,
        });
    console.log(messageCollect);
    printToDiv(event, name);
    userInput.value = '';
}

function printToDiv(message, id){
    printDiv.innerHTML += `<li id=${id}>${message}<button class="remove"></button></li>`;
}


// printDiv.innerHTML += `<div id=${-messageCollect.length}>${event.target.value}<button class="remove"></button><div>`;
module.exports = {pushMessage, messageCollect};
