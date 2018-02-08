"use strict";

console.log("hello first five message");

let dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

let divPrint = document.getElementById('user-text');

function dataRequestComplete(event) {
    console.log("firstFive JSON Load Complete");
    var data = JSON.parse(event.target.responseText);
    console.log("data: ", data);
    // divPrint.innerHTML = data[0].message1;
    showData(data);
    function showData(jason){
        for(var key in jason){
            divPrint.innerHTML += `<p>${jason[key].message}</p>`;
        }
    }

  }
  
function dataRequestFailed(event) {
    console.log("firstFive JSON Load Failed");
  }

  dataRequest.open("GET", "../lib/firstFive.json");
  console.log("Get First Five");

  dataRequest.send();





// document.getElementById

// module.exports = ;