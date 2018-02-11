"use strict";

console.log("hello messageInput.js");

// DEFINTE VARIABLES
let counter = 0;
let messageCollect = [];
let userInput = document.getElementById('user-input');
let printDiv = document.getElementById('user-text');
let deleteAll = document.getElementById('delete');


// EVENT LISTENERS
deleteAll.addEventListener('click', deleteAllMessages);
document.addEventListener('keypress', check);
document.getElementById('clear').addEventListener('click', clearDiv);
document.getElementById('list').addEventListener('click', showList);



// UPON PRESSING ENTER RANDOM ID IS CREATED AND ASSIGNED TO MESSAGE
// THE MESSAGE AND ID ARE PASSED TO pushMessage() FUNCTION AND OBJECT IS CREATED AND PUSHED TO ARRAY.


function check(){
    if(event.keyCode === 13){
        getMessage();
    }
}

function getMessage(){
    console.log(event.target.value);
    var message = event.target.value;
    var id = Math.random().toFixed('6');
    pushMessage(message,id);
    console.log('HTML ID', id);
}

// RECEIVES MESSAGE AND ID, CREATES OBJECT AND PASSES OBJECT TO ARRAY, THEN THE MESSAGE AND ID ARE PASSED TO PRINT, WHERE
// A DOM STRING IS CREATED USING ID AND MESSAGE, SO THAT OBJECT HAS SAME ID AND STRING INSIDE AS OBJECT IN ARRAY.
function pushMessage(event, name){
    messageCollect.push(
        {
        message: event,
        identifier: name,
        });
    printToDiv(event, name);
    userInput.value = '';
    console.log('array ID', name); 
    console.log(messageCollect);
}

// CREATE STRING, ASSIGN ID AND PRINT TO PAGE
function printToDiv(message, id){
    printDiv.innerHTML += `<li id=${id}>${message}<button class="remove"></button></li>`;
    console.log('printDiv content: ', printDiv.innerHTML);
    checkForContent();
}

// WHEN DELETE ALL BUTTON IS PRESSED MESSAGE ARRAY IS CLARED AND AN EMPTY STRING IS PRINTED TO DOM.
function deleteAllMessages(){
    console.log(messageCollect.length);
    var response = window.prompt('This will delete ALL message from history. Are you sure? Press Y for "yes", N for "no');
    if(response === 'y'){
        for(var i = 0; i < messageCollect.length; i++){
            messageCollect.splice(0,messageCollect.length);
        }
        console.log(messageCollect);
        printDiv.innerHTML = '';
        checkForContent();
}
}


function showList(){
    printDiv.innerHTML = '';
        messageCollect.forEach(function(item){
        printDiv.innerHTML += `<li>${item.message}</li>`;
        checkForContent();
    });

}

function clearDiv() {
    printDiv.innerHTML = '';
    checkForContent();
}

function checkForContent(){
if(printDiv.innerHTML === ''){
    document.getElementById('clear').style.opacity = '0.5';
}else{
    document.getElementById('clear').style.opacity = '1';
}
}

module.exports = {pushMessage, messageCollect, showList, deleteAllMessages, getMessage, counter,checkForContent};
