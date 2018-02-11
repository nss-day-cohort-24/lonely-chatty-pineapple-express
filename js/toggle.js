"use strict";

console.log("hello toggle js");

var btnColor = document.getElementById("btn-color").addEventListener("click", darkTheme);
var bigText = document.getElementById("btn-size").addEventListener("click", biggerText);

function darkTheme() {
    var chatDiv = document.getElementById("main-bg");
    chatDiv.classList.toggle("darkTheme");
    var nav = document.getElementById("nav");
    nav.classList.toggle("bg-black");
    var navBottom = document.getElementById("navBottom");
    nav.classList.toggle("bg-navy");
}

function biggerText() {
    var chatDiv = document.getElementById("user-text");
    chatDiv.classList.toggle("biggerText");
}

module.exports = {darkTheme, biggerText};