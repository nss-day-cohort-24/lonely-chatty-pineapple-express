"use strict";

console.log("hello toggle js");

var btnColor = document.getElementById("btn-color").addEventListener("click", darkTheme);
var bigText = document.getElementById("btn-size").addEventListener("click", biggerText);

function darkTheme() {
    var chatDiv = document.getElementById("user-text");
    chatDiv.classList.toggle("darkTheme");
}

function biggerText() {
    var chatDiv = document.getElementById("user-text");
    chatDiv.classList.toggle("biggerText");
}

module.exports = {darkTheme, biggerText};