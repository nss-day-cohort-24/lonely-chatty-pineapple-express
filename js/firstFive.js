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
            divPrint.innerHTML += `<p class ="initial">${jason[key].message}</p>`;
        }
    }

  }
  
function dataRequestFailed(event) {
    console.log("firstFive JSON Load Failed");
  }

  dataRequest.open("GET", "../lib/firstFive.json");
  console.log("Get First Five");

  dataRequest.send();

// // paths to all of your files
// var myFiles = [ "file1", "file2", "file3" ];
// // where you want to store the data
// var jsonData = [];
// // loop through each file
// myFiles.forEach(function (file, i) {
//     // and call loadFile
//     // note how a function is passed as the second parameter
//     // that's the callback function
//     loadFile(file, function (responseText) {
//         // we set jsonData[i] to the parse data since the requests
//         // will not necessarily come in order
//         // so we can't use JSONdata.push(JSON.parse(responseText));
//         // if the order doesn't matter, you can use push
//         jsonData[i] = JSON.parse(responseText);
//         // or you could choose not to store it in an array.
//         // whatever you decide to do with it, it is available as
//         // responseText within this scope (unparsed!)
//     }
// })

module.exports = {dataRequestComplete, dataRequestFailed};