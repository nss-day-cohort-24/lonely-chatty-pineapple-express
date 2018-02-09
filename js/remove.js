'use strict';

// DEFINE VARIABLE ARE REQUIRE MODULES
let messageArray = require("./messageInput");
let messageCollect = messageArray.messageCollect;
// let messageDelete = messageArray.deleteAllMessages;
// let printDiv = document.getElementById('user-text');
let deleteAll = document.getElementById('delete');


// EVENT LISTENERS
// document.getElementById('list').addEventListener('click', messageArray.showList);
// document.addEventListener('keypress', messageArray.getMessage);
// deleteAll.addEventListener('click', messageArray.deleteAllMessages);
document.addEventListener("click", removeMessage);


// REMOVE MESSAGE FUNCTION
function removeMessage (){
    if(event.target.className === 'remove'){
        var index = event.target.parentNode.id;
        var element = document.getElementById(index);
        console.log("HTML Remove ID", index);
        messageCollect.forEach(function(item, position){
            console.log("Array Remove ID", item.identifier);
            if(item.identifier === index){
                messageCollect.splice(position, 1);
                var element = document.getElementById(index);
                element.parentNode.removeChild(element);
            }
            });
    }
}



  