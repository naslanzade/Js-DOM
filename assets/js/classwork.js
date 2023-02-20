"use strict";

// let c=console.log.bind(console)

// c(document);

// let elems=document.getElementsByTagName("h1");
// for (const elem of elems) {
//     console.log(elem);    
// }

// let elems=document.getElementsByClassName("header");
// console.log(elems);

// let elems=document.getElementById("product");
// console.log(elems);

// let elem=document.querySelector("h1");
// console.log(elem);

// let span=document.querySelector("#product span");

// let text=document.querySelector("#product .item p")
// console.log(text);

// console.log(span);

// let thirdSpan=document.querySelector("#product span:nth-child(3)");

// console.log(thirdSpan);

// let spans=document.querySelectorAll("#product span");

// for (const item of spans) {
//     console.log(item);
// }

// for (const item of spans) {

//     if(item.innerText=="Bye3"){
//         item.style.color="red";
//     }   
// }

// let elem=document.querySelector("h2");
// console.log(elem.innerText);
// elem.innerText="Welcome";

// console.log(elem.innerHTML);
// elem.innerText="<span>Resull</span>";

// elem.innerHTML="<span>Resull</span>";
// let result=elem.style;
// result.backgroundColor="yellow";
// result.position="relative";
// result.top="200px";

// let h1=document.querySelector("h1");
// console.log(h1);

// h1.className="test";

// h1.classList.add("test");

// h1.classList.remove("header");

// console.log(h1.classList.contains("header"));


// let button = document.querySelector("#products button");
// let h1 = document.querySelector("#products h1");

// console.log(button);

// button.onclick=function(){
//     // h1.style.color="red";
//      alert("salam")
// }

// button.onclick=function(){
//     alert("sagol")
// }


// button.addEventListener("click",function(){
//     alert("salam")
// });

// button.addEventListener("click",function(){
//     alert("sagol")
// })


// function test(){
//     alert("test function");
// }

// button.addEventListener("click",test);

// button.addEventListener("click", function () {
//     // h1.className="h1-design"
//     h1.classList.add("h1-design")
// });

// let btnOn = document.querySelector("#products .on");

// let btnOff = document.querySelector("#products .off");

// let h1 = document.querySelector("#products h1");

// let icon = document.querySelector("#products i");

// let body = document.querySelector("body");

// btnOn.addEventListener("click", function () {
//     h1.classList.add("active");
//     if (h1.classList.contains("inActive")) {
//         h1.classList.remove("inActive");
//     }
// });

// btnOff.addEventListener("click", function () {
//     h1.classList.add("inActive");
//     if (h1.classList.contains("active")) {
//         h1.classList.remove("active");
//     }
// });


// btnOn.addEventListener("click", function () {
//     icon.classList.add("active");
//     body.classList.add("active-body");
// });

// btnOff.addEventListener("click", function () {
//     icon.classList.remove("active");
//     body.classList.remove("active-body");
// });


// btnOn.addEventListener("click", function () {
//     if (icon.classList.contains("active") && body.classList.contains("active-body")) {
//         icon.classList.remove("active");
//         body.classList.remove("active-body");
//         this.innerText="On";
//         this.classList.remove("btn-danger");
//         this.classList.add("btn-success");

//     } else {
//         icon.classList.add("active");
//         body.classList.add("active-body");
//         this.innerText="Off";
//         this.classList.remove("btn-success");
//         this.classList.add("btn-danger");
//     }
// });


// icon.addEventListener("mouseover",function(){
//     icon.classList.remove("active");
//     body.classList.remove("active-body");   
// })

// icon.addEventListener("mouseout",function(){
//     icon.classList.add("active");
//     body.classList.add("active-body");   
// })


// let input = document.querySelector("#products input");

// let button = document.querySelector("#products button");

// let ul = document.querySelector("#products ul");


// button.addEventListener("click",function(){
//     console.log(input.value);
//     input.value="";
// })


// button.addEventListener("click", function () {
//     let inputValue = input.value;
//     if(inputValue==""){
//         alert("Do not put empty");
//         return;
//     }
    
//     let list=document.querySelectorAll("#products li");
//     for (const item of list) {
//         if(item.innerText==inputValue){
//             alert("Already exist");
//             input.value = "";
//             return;
//         }
//     }
//     let li = document.createElement("li");
//     li.className = "list-group-item my-1";
//     li.innerText = inputValue;
//     ul.append(li);
//     ul.innerHTML+=`<li class="list-group-item my-1">${inputValue}</li>`
//     input.value = "";
// })