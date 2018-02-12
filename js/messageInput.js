"use strict";

console.log("hello messageInput.js");

// DEFINTE VARIABLES
let counter = 0;
let messageCollect = [];
let userInput = document.getElementById('user-input'); // USER INPUT FIELD
let printDiv = document.getElementById('user-text'); // USER TEXT PRINT DIV
let deleteAll = document.getElementById('delete'); // DELETE ALL BUTTON


// EVENT LISTENERS
deleteAll.addEventListener('click', deleteAllMessages); // RUNS DELETE FUNCTION
document.addEventListener('keypress', check); // RUNS A "CHECK TO SEE IF ENTER KEY" FUNCTION
document.getElementById('clear').addEventListener('click', clearDiv); // CLEAR WINDOW FUNCTION
document.getElementById('list').addEventListener('click', showList); // RUNS SHOWALL MESSAGES FUNCTION 




// CHECK TO SEE IF ENTER KEY IS PRESSED, IF SO RUN getMessage() FUNCTION.
function check(){
    if(event.keyCode === 13){
        getMessage();
    }
}


// PARSE THE INPUT FIELD FOR MESSAGE, AND THEN CREATES AN ID
// WITH A RANDOM NUMBER AND PASSES THAT TO pushMessage() FUNCTION. 
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


// SHOW ALL MESSAGES IN MEMORY LOG
// COUNTER WITH % 2 GOES FROM 0, 1, IF 1 SHOW ALL MESSAGES, IF 0 RESUME CHAT.
function showList(){
    counter++;
    if(counter % 2 === 1){
    printDiv.innerHTML = '';
        messageCollect.forEach(function(item){
        printDiv.innerHTML += `<li>${item.message}</li>`;
        checkForContent();
    });
}else{
    printDiv.innerHTML = '';
    messageCollect.forEach(function(item){
    printDiv.innerHTML += `<li id=${item.identifier}>${item.message}<button class="remove"></button></li>`;
});
}
    checkForContent();
}


// CLEAR HTML DOM BUT NOT MESSAGES ARRAY
function clearDiv() {
    printDiv.innerHTML = '';
    checkForContent();
}

// CHECK IF DIV IS EMPTY, IF SO, "DISABLE" CLEAR WINDOW;
function checkForContent(){
if(printDiv.innerHTML === ''){
    document.getElementById('clear').style.opacity = '0.5';
}else{
    document.getElementById('clear').style.opacity = '1';
}
}

module.exports = {pushMessage, messageCollect, showList, deleteAllMessages, getMessage, counter,checkForContent};
