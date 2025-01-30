
// leacture -2 ( OPERATORS  and Conditional statements IN JS ) :


// ---------------------------------------------------Operators----------------------------------------------------------

// Aritmetic Operators : " + , - , * , / , %  , ** "


// example
// {

// let a = 5
// let b = 2

// console.log( "a =",a , " & b =",b)
// console.log(" a + b = ", a+b)
// console.log(" a - b = ", a-b)
// console.log(" a * b = ", a*b)
// console.log(" a / b = ", a/b)
// console.log(" a % b = ", a%b)
// console.log( "a ** b = ", a**b)

// }


/* uniary operator : "a++ , ++a" , "a-- , --a"

 post increment and decrement (a++ , a--) and preincremnt and decrement (++a , --a)

 post increment and decrement (a++ , a--) --> work  
 preincremnt and decrement (++a , --a)   --> work and reflect ( this is best )                              */

 //example
// {

// let a = 5;
// console.log("++a =",++a)  // work and reflect


// let c = 5; 
//                            // work
// console.log("c++ =", c++)     // reflect
// console.log("c++ =", c) 
// }

// Assignment operstors : ( = , += , *= ,/= )

// example
// {

// let a = 4;
// a += 5;                  // a = a + 5
// console.log("a =", a)
// a *= 5;                  // asterisk ( * )  exclamation mark ( ! )
// console.log("a =", a)
// a -= 5;
// console.log("a =", a)

// }

// Compariion Operators : [ checks value only ] ( > , < , >= ,<= , == , != )
//                        [ checks datatype too strictly ] ( eqal to &type (=== ) , ( not equal to &type (!==)  )


//example

// {

// let a = 5;
// let b = 5;
// console.log( "a =",a , " & b =",b)
// console.log("a == b", a==b)
// console.log("a != b", a!=b)

// console.log("-----------------number and string  comparision -----------------------------------------")

// let c = 3
// let d = "3"
// console.log( "c =",c , " & d =",d)

// console.log("c == d", c==d)

// console.log("c === d", c===d)


// console.log("a > b ", a>b )

// console.log("a >= b ", a>=b)

//  }


// Logical Operators : ( && , || , ! )              ( ctrl K and ctrl F ) - code indentation
                                            //      ( ctrl + [ , ] )  - move whole selected code

//example

// // {
// let a = 3;
// let b = 5;
// console.log("a =", a, " & b =", b)

// console.log(" a >= b" ,"&&", "a===b", a >= b && a===b )
// console.log(" a > b" ,"&&", "a===b", a > b && a===b )


// console.log(" a > b" ,"||", "a===b", a >= b || a===b )

// let cond1 = a>=b
// let cond2 = a==b

// console.log("cond1 && cond2" , cond1 && cond2)
// console.log("cond1 || cond2" , cond1 || cond2)

// // logical Not ! - deals with only one expresion

// console.log(" !(a >= b)" , !(a >= b) ) // false exprn --> ans - true

// console.log("!(a < b)", !(a < b) ); // true -- false
// console.log("!(6 < 5)", !(6 < 5) ); // false -- true

// }


// --------------------------------------------------------Conditional Statements ------------------------------------------------------

// 1) if condition

/*
1. example :

let age = 14;

if( age >= 18 ){
    console.log("You can vote ")
}

if( age < 18 ){
    console.log(" You cannot Vote ")
}
 
2. example :
{
let mode = "Light";
let color;

if( mode=="Dark"){
    color="Black"
}

if( mode=="Light"){
    color="White"
}
}
console.log("color : ", color)       */



// 2) if else statement

// 1.
//let mode = "Dark"
// let color;

// if( mode=="Dark"){
//     color="Black"
// } else {
//     color ="White"
// }

// console.log("color : ", color)


// 2.
//let num=8;

// if(num%2==0){
//     console.log(num,'is even')
// } else {
//     console.log(num,'is odd')
// }


//3) if else if
//1.

// let mode= "blue";
// let color;

// if(mode==="Dark"){
//     color="Black";
// } else if(mode==="pink"){
//     color ="pink";
// } else if(mode=== "blue"){
//     color="blue";
// } else {
//     color ="white";
// }

// console.log(color);

//



// p1.get a user to input a number using prompt("enter a number :"), check if the no is multiple of 5 or not


// let num = prompt("enter a number: ")
// number = num;

// if (number % 5 == 0) {
//     console.log("multiple of 5");
// } else {
//     console.log("not multiple of 5");

// }

//p2.write a code which can give grade to students according to their scores

// 90-100 * A
// 70-89  * B
// 60-69  * C
// 50-59  * D
// 0-49   * F

// let score = prompt("enter the score: ");
// console.log("for", score ,"grade is ");

// if (score <= 100 &&  score >=90 ){
//     console.log("A")
// }else if(score < 90 &&  score >=70 ){
//     console.log("B")
// }else if(score < 70 &&  score >=60){
//     console.log("C")
// }else if(score < 60 &&  score >=50){
//     console.log("D")
// }else if(score <50 &&  score >=0){
//     console.log("F")
// }else {
//     console.log("enter valid number / enter blw 0 to 100 ")
// }




/*---Leacture-3-( LOOPS AND STRINGS )---------------------------------------------------------------Loops-------------------------------------------------------------------------*/


/* 

1)  For LOOP :

* syntax : for ( variable initialization ; stopping condition; updation { increment/decrement}) {
                 work to be done  ;
            }
 
* dont enter the infinate loop ex : for (let i=0; i>=0 ; i++)            


1.example 

for(let i=1; i<=5;i++){
    console.log("MANOJ MEDLERI")
}

2.example
let sum=0;

for(let i=1;i<=5; i++){
    sum = sum+i;
} 
console.log("sum is ",sum); 

3.example

sum=0;
size=0;
for(let i=1;i<=5; i++){
    sum = sum+i;
    
    size++
} 
console.log("sum is ",sum);
console.log("size is : ", size)


4.example

let price = [250,645,300,900,50];

let idx = 0;

for(let i =0; i <price.length; i++){
    console.log(" value at index", i ,"is =",  price[i])
}



*/


/*

2) WHILE LOOP :

* syntax :  initialization;  
            while ( stoping condition ) {
              work to be done 
              updation 
            } 

1.example 


let i=1;
while(i<=5){
    console.log("i=",i)
    i++;
}

*/

/*

3) DO WHILE LOOP :

* syntax :  initialization;
            do{
               work to be done;
               updation; 
            }while(stoping condition);

1. example            

let i=1;
do{
    console.log("m=",i);
    i++
}while(i<=5);


*/

/*

4) for of   loop :

1.it is used for Strings and arrays 
2.for of loop is used to print the individual character of the string 

1.example :


let str="MANOJ S M";

for(let i of str){
    console.log("i=",i);
}


2.example :


manu = "manu";
size=0;
for(let val of manu ){
   console.log("val=",val)
    
    size++
} 
console.log("size is : ", size)

*/

/*

5) for in  loop :

* it is used for objects and  arrays 
* it is used to print both the key and values of the object 

1. example:


let student={
    name : "rahul",
    age : 25,
    cgpa :7.5,
}

for(let i in student){
    console.log("key =", i, "&" ,"values =", student[i]);
}           
           
*/

// Assignment questions :

/* 1. print all the even no's from 1 to 100 :

 

1.Using for loop

for (let i=1; i<=100; i++){
    if(i%2==0){
        console.log(i);
        i++;
    }
}



let number=1;

while(number<=100){
    if(number%2==0){
        console.log("number=",number)
    }
    number++
}
  
*/           
 
// 2. print all the odd no's from 1 to 100 :

 

/* 1.Using for loop

for (let i=1; i<=100; i++){
    if(i%2!=0){
        console.log(i);
        i++;
    }
}

*/


/* 3.create a game where you start with any random number
Ask the user to keep guessig the game number until the user 
enters  the correct value 


// tried
 
let correctNum = 25;
let randomNum = prompt("enter any  random no : ");


if (randomNum !== correctNum) {   // used condtion to repeat the statement rather the loop :( my bad )

    randomNum = prompt(" Not excatly ! enter correct no : ")

}
console.log("congrates")


// right one

let gameNum = 25;
let userNum = prompt("guess the correct number:");

while (userNum != gameNum) {
    userNum = prompt("Not Excatly ! try again");
}

console.log("YOU WON !!");

*/           
           
           
  //------------------------------------------------------------------------------STRINGS-----------------------------------------------------------------------  

/*

str = "manu";
console.log(str)

console.log(str.length)




template litreal : template litreal is a string created using back tick( ` manu` )
string interpolation is when we sustutiste the placeholders or  embeded expressions in the string  
using  dollor and a expression within a curly braces  --   ${expression} */



// let obj ={
//     item : "pen",
//     cost : 10,
// }

// console.log("the item is ", obj.item ,"costs", obj.cost ,"rupees")

// console.log(`the item is ${obj.item} that costs ${obj.cost} rupees`);



// console.log(`this is a temlate ${1+2+3}`)  // expression can also be evaluated

// escape characters in strings :

// {
// let str = "manoj\nsm"
// console.log(str)
// let man = "manoj\tsm"
// console.log(man.length)    // \t and \n are  1 character 
// }

// string methodes :

/* str.lenght , here length is a property of string 
  and there are string methodes/functions such as 


1. str.toUppercase()
2. str.toLowercase()
3. str.trim() 
4. str.slice()   
5. str.concat(str2)
6. str.replace()
7. str.charAt     */


/* 1. str.toUppercase()

let str = "apna college";

str.toUpperCase();                // orginal tr will not be changed until it is changed and put in some variable 

str = str.toUpperCase();
console.log(str); 
                                   */

/* 3. str.trim()
string.trim() 

let strg =  "   manu    "
console.log(strg.trim());         // removes the white spaces [ spaces infront of str  and at the end of str]

                              */


/*

4. str.slice() 

let manu = "manoj is a hardworking boy stay in local town willing to achive his goals ";
console.log(manu.slice(0,46));             
                                                                   // will give characters from 0 indx to 46 indx on console 
                                          */                          


// 5. str.replace()

// console.log(manu.replace('manoj','manu'));                       



/* 6.  str.concat()

let str1 = "manu the ";
let str2 = "honest ";

let res = str1.concat(str2);  or 
let res = str1 + str2
console.log(res);                        */


/*

 7. str.charAt()

let str = "ilovejs";

console.log(str.charAt(4));  / e  */




// Assignment question 3

/* 3. prompt the user to enter their full name.Generate  userName for
them on the input . Start username with @AbortController, followed by their fullname
and ending with the fullname length. 


// tried :
let str1 = prompt("enter the FIRSTNAME: ");
let str2 = prompt("enter the LASTNAME: ");

let one = str1+str2;

let res = '@'+str1+str2+one.length;

console.log(res);

// actual :

 let fullName = prompt("enter the FULLNAME : ");

 let userName = '@' + fullName + fullName.length ;
 
 console.log("username =", userName)    */



 
// let a = 5 ;
// let b = 2;

// let modulus = a % b;
// console.log("modulus",modulus)

let mode = "dark";

if(mode == "light"){
    color = "white";
}else{
    color = "black";
}

console.log(color);












