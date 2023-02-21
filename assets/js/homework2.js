"use strict"

let first = document.querySelector("#function .calculator .number-1");
let second = document.querySelector("#function .calculator .number-2");
let result = document.querySelector("#function .calculator .res");

function add() {
    first = parseInt(myForm.first.value);
    second = parseInt(myForm.second.value);
    result = first + second;
    myForm.result.value = result;
    
}


function minus() {
    first = parseInt(myForm.first.value);
    second = parseInt(myForm.second.value);
    result = first - second;
    myForm.result.value = result;
}

function mult() {
    first = parseInt(myForm.first.value);
    second = parseInt(myForm.second.value);
    result = first * second;
    myForm.result.value = result;

}

function divison() {
    first = parseInt(myForm.first.value);
    second = parseInt(myForm.second.value);
    result = first / second;
    myForm.result.value = result;
}




