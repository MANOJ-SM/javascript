
// -------------------------- Events --------------------------------------

//------- variable.eventName( work/function() )--- simple one----------



// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("button was clicked ");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector(".div");

// div.onmouseover = () => {
//     console.log("hey u are here")
// }


// ------------------------------   Event object --------------

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX , evt.clientY);

// }

// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX , evt.clientY);
// }


//------------------------------  EventListners------------------------------

// the advatage of eventListners is that we can use single event for multiple works like below click event 


//  syntax ------btn1.addEventListener(eventName,callback/function/handler);


// let btn2 = document.querySelector("#btn1");
// btn2.addEventListener("click",(evt) =>{
//     console.log('hello');
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// });

// btn2.addEventListener("click",(evt) =>{
//     console.log('hello i am Ironman');
    
// });

// a function which is passed as the argument in another function we call it as a callback function 

// btn2.addEventListener("click",(evt) =>{
//     console.log('handler1');
// });    

// btn2.addEventListener("click",(evt) =>{
//     console.log('handler2');
// });    

// //----------------------------// btn2.addEventListener("click",(evt) =>{
// //------------------------//     console.log('handler3');
// //----------------------------// });    

// btn2.addEventListener("click",(evt) =>{
//     console.log('handler4');
// });    

// if i want remove handler2 

// const handler3 = () => {
//     console.log('handler3');
// }

// btn2.addEventListener("click",handler3);

// btn2.removeEventListener("click",handler3)


//------------------------------------------------------------------------------------------------

// eventListener 1

let btn3 = document.createElement("button");

btn3.innerText="click me!";

// let body = document.querySelector("body");

// console.dir(body)    // there is a button 

let button = document.querySelector("button");

button.after(btn3);

let currMODE = "light";

btn3.addEventListener("click", () => {
    if(currMODE === "light"){
        document.body.style.backgroundColor="black";
        currMODE="dark";
    }else{
        document.body.style.backgroundColor="white";
        currMODE="light";
    }
    console.log(currMODE);
    
});


// evtlstnr 2

let div = document.createElement("div")

div.innerHTML="<ul><h2>FRUITS</h2> <li> mango</li><li>apple</li>";

let button2 = document.querySelector("button");


button2.after(div);


div.addEventListener("mouseover", () =>{
    console.log("you are inside the div");
})


// EventListners 

// mouse - click,dblclick.mouseover


