'use strict';

let messageArray = require("./messageInput");
let messageCollect = messageArray.messageCollect;
let printDiv = document.getElementById('user-text');


document.addEventListener("click", identifyMessage);


function identifyMessage (){
    if(event.target.className === 'remove'){
        var index = event.target.parentNode.id;
        messageCollect.forEach(function(item){
            console.log(index);
            console.log(item.identifier);
            if(index === item.identifer){
                console.log(item);
            }
        });
        }        
    }




// function remove(event) {
//         if(event.target.className === 'remove'){
//         var dadId = event.target.parentNode.id;
//         var element = document.getElementById(dadId);
//         element.parentNode.removeChild(element);
//     }
// }

  