"use strict";

let inputText = document.querySelector(".txt");
let myButton = document.querySelector(".btn-list");
let list = document.querySelector(".container ul");




myButton.addEventListener("click", function (e) {
    if (inputText.value != "") {
        e.preventDefault();
        let myLi = document.createElement("li");
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);

      
        let mySpan = document.createElement("span");
        mySpan.innerHTML = "x";
        myLi.appendChild(mySpan);
    }

    let close = document.querySelectorAll("span");
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
            close[i].parentElement.style.display = "none";
        })
    }

    inputText.value = "";

});

