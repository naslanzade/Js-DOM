"use strict";

let input = document.querySelector("#main input");
let button = document.querySelector("#main button");
let ul = document.querySelector("#main ul");
let icon = document.querySelector("main i");

let btn=document.querySelector("main .button");

button.addEventListener("click", function () {
    let inputValue = input.value;
    if (inputValue == "") {
        alert("Do not put empty");
        return;
    }
   
   
    let list = document.querySelectorAll("#main li");
    for (const item of list) {
        if (item.innerText == inputValue) {
            alert("Already exist");
            input.value = "";
            return;
        }
    }

    let li = document.createElement("li");    
    li.className = "list-group-item my-1";
    li.innerText = inputValue;  
    ul.append(li);
    input.value = "";

});

