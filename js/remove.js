'use strict';

let messageArray = require("./messageInput");
let messageCollect = messageArray.messageCollect;
let printDiv = document.getElementById('user-text');


document.addEventListener("click", removeMessage);


function removeMessage (){
    if(event.target.className === 'remove'){
        var index = event.target.parentNode.id;
        var element = document.getElementById(index);
        console.log(index);
        messageCollect.forEach(function(item){
            console.log(item.identifier);
            if(item.identifier === index){
                messageCollect.splice(item, 1);
                element.parentNode.removeChild(element);
                console.log(messageCollect);
            }
            });
    }
}
    

// function identifyMessage(removeMessage()){

// }




function remove(event) {
        if(event.target.className === 'remove'){
        var dadId = event.target.parentNode.id;
        var element = document.getElementById(dadId);
        element.parentNode.removeChild(element);
    }
}

  