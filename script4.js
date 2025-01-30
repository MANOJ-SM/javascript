
//--------------------------------------------------leature 5 - Functions -------------------------------------------------------

/*
1.Functions : Functions are block of code that performes specific task and invoked(called) whenever or wherever we need 
2.The advantage of functions is that we need to define the function
only once and we can use it for multiple times whenever we want .
4.we need to define the functions first to call them whenever we want 
5. redendency - repeatency (to avoid redendency of same code  hence we use function) 
7. the input variable  we use in function defination is called parameters     
8. the input variable we give/pass in function call is called arguments    .                                                 
                                                                                                                        */



// fuction taking no input 

function manu(){
    console.log("i will sccessed one day ");
    console.log("i am goood , i am honest , this are my investments ");

}

manu();

console.log("---------------------------------------------------------------");

// function taking input

function myFunction(msg){     // here " msg " is  input variable " or we call it as parameter
    console.log(msg);
}

let msg = [ 1, 4 , 5, " msg can be anything"];
myFunction(msg);    





function myFunction(x){     // here   x  is  input variable " or we call it as parameter
    console.log(x);
}

myFunction(5);    //  5                         // for numbers we dont use anything




console.log("---------------------------------------------------------------");


function offer(discount) {
    let manu = [25, 45]
    console.log(manu);
    console.log(" after discount");
    let i = 0;

    for (let val of manu) {
        offer = val / discount;
        manu[i] = manu[i] - offer;
        i++;

    }
    
    console.log(manu);

}

offer(5);

console.log("---------------------------------------------------------------");


function add(x,y){
    console.log(x+y);
}

add(4,3);


console.log("---------------------------------------------------------------");


function sum(x, y) {
    s = x + y;
    return s;
}

let val = sum(4,3);
console.log(val);

console.log("-----------------------------------------------------------------------");

/*

        RETURN  

        * A FUNCTION WITH RETURN KEYWORD WILL STORE THE RESULT OF THE FUNCTION IN ONE VARIABLE , SO THAT YOU CAN USE THE RESULT OF THE FUNCTION WHENEVER YOU WANT OR WHEREVER YOU WANT  

        AND ALSO THE RESULT OF A FUNCTION STORED IN VARIABLE CAN ALSO BE PASSED AS THE PARAMETER IN ANOTHER FUNCTION 

        1.return will be the last line of the function , lines after return keyword wont execute
        2.parameters are  like local scope variables work only within function 


--------------------------------------------------------------------------------------------------------
*/


function add(a,b){
    c = a + b;
    return c;

}

console.log(add(3,8));
output = add(3,4);                 // the value will return to add() here and it is stored in variable called output now
console.log(output);                   


function sub(x) {
    return x + 1;
}


final_output = sub(output)         // we are passing the value present in variable to another function as argument 
console.log(final_output);
console.log("-----------------------------------------------------------------------------------------------");



/*asmt q.1 ) create a function using the "function" keyword that takes a string as an argument 
and returns the number of vowels in the string. */



function vowelCount(string) {                   
    let count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            
             count += 1;
             
        }

    }
    console.log("number of vowels in string are = ",count);
}


vowelCount("once");


console.log("--------------------------------------------------------------------------------")


// practice 2                                                                                 ******  practice vowels count program 


function vowelCount(string){
    let count = 0;
    for (let i = 0; i < string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" ||string[i] === "o" ||string[i] === "u"){
            count += 1;

        }
    }
    console.log(" the no of vowels in str are :", count);



}

vowelCount("aeiou")

console.log("--------------------------------------------------------")

// practice 3  using for of loop :

function VowelCount(string){
    let count = 0;
    for ( let char of string){
        if(char === "a" || char === "e" || char === "i" ||char === "o" || char === "u"){
            console.log(char)
            count += 1;

        }
    }
    console.log(" no of vowels is : ", count)



}


VowelCount("gururagavendra")

console.log("--------------------------------------------------------")



/*
            ------------------------------------------ ARROW FUNCTIONS -------------------------------------

arrow function  are compact form of writting functions 

syntax :       
                                                                                     ****** practice programs with arrow functions
const functionName = (pram1, param2)=>{
    // work space
    
}

here : (pram1, param2) - arwfun takes input as parameters 
        arrow function symbol indicates  (=>) will tell what to do  
         const functionName - we can store are arwfun in some variable 
        // we can check wts in arwfun just by typing arwfun name wtout () and enter
ex:

normal function :

function sum(a,b){
    return a + b;
}

arrow function :

(a,b)=>{                              // here we just created a arrow function but it cannot run
    console.log( a+b );               // because arwfun is supposed to be stored in some variable and
                                      // then by calling variable name we can print arwfun and and
}                                     // we can o/p of prgm by passing some values inside variable ( arwfun name)          
                                     

const arwfun = (a,b)=>{
    console.log(a+b);
}

arwfun(3,4)                            // here we get 7 

                                                                                            ****** practice programs with arrow functions
const functionName = (pram1, param2)=>{
    
}


*/



const vowelsCount = (string) => {
    let count = 0;
    for ( let char of string){
        if(char === "a" || char === "e" || char === "i" ||char === "o" || char === "u"){
            console.log(char)
            count += 1;

        }
    }
    console.log(" no of vowels is : ", count)


 
     
}
vowelsCount('manojmanoj')


console.log("--------------------------------------------------------")


const arwfun = (a,b)=>{
    console.log(a+b);
}

arwfun(3,4)                            // here we get 7 

console.log("--------------------------------------------------------")

/*
if functions  joins/ binded  with an object / data struture then we call it an method
ex : toUppercase is a functions but when it joins with the string 
it will act as method
ex :

str = 'manu'
console.log(str.toUppercase)

*/

{

function sum(a,b){
    let x = a + b
    return x;
}


console.log(sum(100,400)); 

}
const mul = (a,b) =>{
    console.log(a*b);

}

mul(3,7);

const variable = (a,b) =>{
    console.log(a+b)
}
variable(20,3);







const summ = (a,b) =>{
    return a + b; 
}

// write a function to print that you are stupid yet you will be successed 

let success = () => {
    console.log("you are stupid yet you will be successed ") 
};

success();


// create a function using the "function" keyword that takes a string as an argument and returns the no of vowels in the strings

function vowel(string) {
    let count = 0;
    for(  char of string){
    if(char=='a' || char == 'e' ||char=='i' ||  char== 'o' ||char=='u'  ){
         count++;
    }
}
 console.log(count)
}

vowel("manojaeiou");


console.log("--------------------------------------------------------")
function vowelcount(string) {
    let count = 0;
    for( char of string ) {
        // if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ){
        //     count++;
        console.log(char);
        
    }
    
}
vowelcount("manu");

// write a program where if I give 200 as input it should only print 2
console.log("--------------------------------------------------------")

function printFirstDigit(number) {
    while (number >= 10) {
      number /= 10;
    }
    console.log(Math.floor(number));
  }
  
  // Example usage:
  printFirstDigit(200);


  console.log("--------------------------------------------------------")


  function firstdigitonly(num){
    while(num >= 10){
        num /= 10;
    }
    console.log(Math.floor(num))

  }

  firstdigitonly(2000);

  console.log("----------------------------------                   For EACH     ----------------------")



  // [ for each ] - function will be applied on the arrayes it require an array and a function defination 
  // it is basically used target each ele of an array and perform operation on it 
  // it can print each element of an array , index of each array element , whole array at infront of each array element 
 

const arry = ["masv","psbfgf","srntf"];

arry.forEach((val , idx , arr )=>{
    console.log(val.toUpperCase(), idx , arr);

});

console.log("--------------------------------------------------------")


// HIGHER ORDER FUNCTION - function which take other functions as their parameters or return function as  their result are reffered as a HOF  ----
// FOR EACH FUNCTION  is a higher order function or methode 


const ary = [1,2,3,4,5];

ary.forEach((val) => {
    console.log(val*val)
});


console.log("------------------------------------------------------------------")

let array = [ 1,2,3,4,5];

for(char of array ){
    console.log(char);
}





{

    function sum(a,b){
        return a + b; 
        
    }
    
    
    console.log(sum(100,400)); 
    
    }

    console.log("-----------------------------------------------------------------------")

    function summm(a,b){
          return a + b;
        
    }

    console.log(summm(3,3));

    //-------arrowfunction and function ------differnce is function & return key are not used and no of code line will be reduced ---------------------------------------------------------------------

    let oneword = (a,b) => a + b ;

    console.log(oneword(8,8));

    console.log("-----------------------------------------------------------------------")


    // let product = (x,y) => x*y ;

    // console.log(product(4,4));

    let plates = [1,3,5,7,9];

    plates.forEach((val,idx,) => {
        console.log(val,idx,);
        console.log( val *3);
    });

