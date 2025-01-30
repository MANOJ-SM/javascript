// notes 1 

/* 1. a js file is opened in vs code and a html page is created and saved in the same location ( within a new folder )
   2. a js file is linked with html page to get the output in the console in the browser ( chrome ) with the <script> tag within the <body> </body> end of body tag
   3. sytanx to link js with html is -> <script src=" js file name.js"> </script>
         ( console is opened by inspect on homepage of chrome ) 
   4. start to write the code in js file 
   5. use console.log() to print the things on console  
   6. log() is printing funtion that prints on console thus console.log

   ctrl k + ctr f --- proper indantation key
   win + shit + s --- partial screenshot 
   alt + f4       --- shutDown
   corser select + alt  --- to select multiple keywords at different lines at a time
   ctrl + [ , ] )  - move whole selected code
//----------------------------------------------------------------------dataypes-------------------------------------------------------------   
// there are 7 primitive datatypes :
/*  1. Number
    2. String 
    3. Boolean 
    4. Undifined         
    5. Null         
    6. BigInt
    7. Symbol    

there is 1 non primitive datatype that is object (Arrays , functions ) */


/* there are 2 keywords used before variables name to define variables

   1. let
   2. const
   
   both the let and const are block scope keywords that are used to define the variables in js
                                                                                                                */

// use of let keyword ( value can be changed or updated once after declering )

let a = 5
let b = 2

console.log( "a =",a , " & b =",b)

a = 8
b = 9

console.log( "a =",a , " & b =",b)


// use of const keyword ( value can neigther be changed nor updated  ) error in consle
const c = 5

console.log("c =",c)

// c = 3
// console.log("c =", c)      // error 


/*  var keyword can also be used but its not give an eroor  for redecleraing same variable name which may 
    create confusions/complexity in 1000 lines programs when we want to change something 
    but incase of  let keywoard  it will give an error for redeclearing a same variable                           */

var age = 5

var age= 8
console.log("age =", age) 
// let a  = 5

// let a = 8

{

    var age = 5

    var age = 89
     
    console.log("age =", age) 

    let a = 5

}

// let a = 8     

var age = 34;
var age = 67;
console.log( "age",age);


// objets in js are written like below with help of key : values , methode


const student = {
    fullName : "Manu Medleri" ,
    age : 20,
    cgpa :8.4,
    ispass : true 
};

const product = {
    fullName : "Parker Jotter Standard CT Ball Pen ",
    color : "black",
    Rating : 4,
    cost : 270,

}

// to alter the things within object 
product["cost"] = product["cost"] +1


//  2 ways to access the particular key value in object 
// here cost is the key and 270 is its value 
console.log(product.cost)

console.log(product["cost"])

// to know the type of dataype 

console.log(typeof product["cost"]);


console.log(product["Rating"]);


console.log(typeof(product));






























