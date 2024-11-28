"use strict"

function abc(){
    console.log("abc");
    console.log(this);  // global object 
}

abc();  


function manu(){
    console.log("hi manu !");
}

window.manu();
