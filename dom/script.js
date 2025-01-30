
/* 

--------------------------------     DOM     ----------------------------------------------------
 
what is window object ? 

an window object is browsers object and it is automatically created by the browser
it is basically a global object with lots of properties and methodes 
  
what is dom ?

each element in html are converted into objects this object we called as  document and  we can access it in js file 
this document is located in window object
document( model or representation of html)       
DOM - the methode of accessing html in js 
used to apply dynamic changes or manipulation in web pages                                   */




// console.log(document.body);                //- prints html body 
// console.dir(document.body);                //- prits properties of body   // console.dir - gives collection 


// console.dir(document.body.childNodes[1]);                  // targeting the first childnode  /div
document.body.childNodes[1].innerText = "abcd";            // changing the value of firstnode /div/h1 tag  


// ------------------------ DOM Manupulation ---------------------------------------------------------



// 1. selecting ID        {      document.getElementById(" IDName ")                  }
// 2. selecting class     {      document.getElementesByClassName("class name")             }
// 3. selecting tag       {      document.getElementByTagName("tag name")             }


// if the id doesnt exists in html then null will be printed
// if the class doesnt exists then empty HTMLcollection will be printed

// let heading = document.getElementById("manu");
// console.dir(heading);
// console.log(heading);


//  let cls = document.getElementsByClassName("myclass");
 
//  console.dir(cls);
//  console.log( cls);


// let para = document.getElementsByTagName("p");
// console.dir(para);
// console.log(para);



// one more best methode to access the html elements 
// query selector -- document.querySelector("ID,Class,Tag name")

let ele = document.querySelector("p");      // returns only 1st element 
console.dir(ele);

let ele1 = document.querySelectorAll("p");
console.dir(ele1);                               // returns the nodelist (grup of nodes/tag/class/id)


let nnn = document.querySelector(".myclass");      // returns only 1st element 
console.dir(nnn);

let mm = document.querySelector("#manu");      // returns only 1st element 
console.dir(mm);
console.log(mm);

// -----------------------------------------           practice       --------------------------------------

document.querySelector("#manu").innerText="hey its new paragraph";
        
console.dir(document.body.childNodes[9]);

let dom = document.body.childNodes[7];

console.log(dom);
console.dir(dom);


// ----------------------------------------- properties in dom --------------------------------------

let dom2 = document.body.childNodes[7];

console.log(dom2.tagName);                                     // 1. tagName ---   to know tag name 


//------------------------------------------------------------------------------

console.log(dom2.innerText = "hello this is new one !");       // 2. innerText --- to change inner text 
console.dir(dom2);

//--------------------------------------------------------------------------------

console.log(dom2.innerHTML = "<div> <ul> <li> apple </li> <li> mango</li> </div>");     // innerHTMl -- can replace exisiting tags with new headdings , div and all

//------------------------------------------------------------------------

let content = document.querySelector(".myclass");

console.log(content.innerText);
console.log(content.textContent);    // on style applied                           // 4. textContent -- show hidden text                                            


//----------------------------------------------    Practise question    ---------------------------------------------------------------------------------

// 1.

let test = document.querySelector("#test")

console.log(test)

test.innerText = test.innerText + "by ApnaCollege";


console.log(test);

//2.

let divs = document.querySelectorAll(".box");

// console.log(div)

// divs[0].innerText="sec";
// divs[1].innerText="third";
// divs[2].innerText="fourth";


// in a better way  

let idx=0;

for (div of divs ) {
    div.innerText = `this is ${idx} div`
    idx++;
}


//-----------------------------------     DOM Attributes  ---------------------------------------------------

// 1. getAttribute(atrbt);       //  get attribute values -- to know value of attributes that are defined 

let atrbt = document.querySelector("div");

console.log(atrbt);

console.log(atrbt.getAttribute("class"));        //1 *            // value of attributes can be accessd here , here  value of class is accessed , even id or something which is defined or written in html can also be accessed here

console.log(atrbt.getAttribute("id"));           //11



// 2. setAttribute(attr,value)   // to change attribute value


console.log(atrbt.setAttribute("class","2"));    //2 *     // it will change in html page 


//------------------------- to change style of element -------------------

let para = document.querySelector("p");

console.log(para);

para.style.backgroundColor="green";

para.style.fontSize="26px";

// para.style.visibility="hidden";








//-------------------------------- to create new element in html using js ------------------------------------



// step1: creation of ele step2: positioning of ele with reference to another exisiting ele


let button = document.createElement("button");

console.log(button.innerText="click button now ");

let newDIV = document.querySelector("div");           // changes in html elements

// newDIV.append(button);                // a button created inside first div ele in html  at its end 


// newDIV.prepend(button);                 // a button created inside first div ele in html  at the beginning of div              


// newDIV.before(button);                     // a button created inside first div ele in html  just before the div   

// newDIV.after(button);                     // a button created inside first div ele in html  just after the div   



//----------------------------------- Practice questions


// 1.

let button1 = document.createElement("button");
button1.innerText="clickme";
button1.style.backgroundColor="white";


let newDIV1 = document.querySelector("body"); 

newDIV1.prepend(button1);

// 2.

let para1 = document.querySelector(".style");

console.log(para1.classList);

para1.classList.add("newStyle")            // adds another class to tag which consist of an already a class 

para1.classList.remove("newStyle")         // can remove the class of an tag 


