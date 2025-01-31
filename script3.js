

// -----Leacture-4-( Arrays )------------------------------------------------------------------------------------------------

/*

In non primitive datatypes objects will come : in objects (arrays , fuctions ) will come 

*An string like "manu" is a string type, &  any array collection is a object type 

*Array : Array is a collection  of elements 
*it uses  square bractes to store the data ,  [ ] 
*data mayabe anything strings , numbers ,, but both the strings and numbers are not used togther ;
*strings are immutable whereas array is mutable , using indx no we can change the value  inside an array  
* in objects we give a separate name for each key  eventhough having similar values
 but in array we store all the similar values in a single variable   
                                                                                                      */
/* ex : 1  


let marks = [ 90 , 98 , 94 , 93 , 92 , 99 ];
console.log(marks.length);
console.log(typeof marks )

console.log(marks);

marks[0] = 66;
console.log(marks);     */

/*

//ex :2

let girls = [ "Niveditha","Pallavi", "Pooja", "Suman"]

for( let i=0 ;i<girls.length ;i++){
    console.log(girls[i]);
}


to access array values we use for each loop : for of and for in loops 
 we prefer for of loop


for(let i of girls){
    console.log(i)
}

// ex: 3



let cities = [ "Hulgur", "Dharwad","Dharwad","savnur"];

for(let i of cities){
    console.log(i.toUpperCase());

}

*/

/*

// asmt qtn - 1

1.for a given array with marks of students --> [85,97,44,37,76,60]
find the average marks of the entire class  


// tried 

let marks = [ 85,97,44,37,76,60]

let sum =0;
let average =0;

sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5]
                                         
average = sum/marks.length;            // didn't got how to acces elements in array 

console.log(marks.length)
console.log(average)

*/

/* acutal

let marks = [ 85,97,44,37,76,60];

let sum = 0;
let average =0;


for( let val of marks){
   sum += val;                 //  sum = sum + val          
}

average = sum/marks.length;
console.log(average)

*/


/*

let marks = [ 85,97,44,37,76,60];

let sum=0;

for(let val of marks){
    sum+=val ; // sum = sum +val

}

let average = sum/marks.length;

console.log(`average marks of the class is ${average}`)

*/


// asmt qtn - 2


/*

 2 . for a given array with prices f 5 items --> [ 250,645,300,900,50]
 all the items have an offer of 10% off on them  change the array to
 store the updated prices after the offer applied
 
 
 // using for of loop

let price = [250,645,300,900,50];

let i = 0;
for(let val of price){
    console.log(`price before offer ${val}`);
     let offer = val/10
    price[i]= price[i] - offer;
    console.log(`price after offer ${price[i]}`);
    i++;
}

console.log(`the updated price after offer applied is ${price}`);

*/

//  using for loop 

/*

let price = [250,645,300,900,50];

let i = 0;
let offer;


for(i=0; i<price.length; i++){
     offer = price[i]/10;
     price[i] = price[i] -offer;

}

console.log(`the updated price after offer applied is ${price}`);


*/

//-------------------------------------------------------------------// arrays in js :--------------------------------------------------------

/*  Array Methodes :

1)push() : add item at end 
2)pop() : delete item at end 
3)toString() : convert array to string
4)concat() : joins to strings together 
5)unshift() : add  item at start
6)shift() : removes item at start 
7)slice() : gives slice (some part) of array   
8)splice() :  delete or replace

*/


//---------------------------------------------------------------

/* 

let price = [250,645,300,900,50 ];

console.log(price);

price.push(67);

console.log(price);

                             */

// //---------------------------------------------------------------


/* 

let del = price.pop()


console.log(price);

console.log(` the deleted item is ${del}`);

                                                   */

// //---------------------------------------------------------------

/*

console.log(price.toString());


let books = [ "my biography "," zil "," try again" ];
console.log(books.toString());

let manu = ["  manu ", " manu " ]
console.log(manu.toString());
                                                       */

//---------------------------------------------------------------

/*

 
let all = books.concat(price,manu);            // other way or right way

console.log(all);      

//---------------------------------------------------------------

let merge = [price] + [books] + [manu];       // one way
console.log(merge);

                                                       */
// --------------------------------------------------------

/*


let prices = [250,645,300,900,50,500 ];

prices.unshift(200);

console.log(prices);
                                                          */

// -------------------------------------------------------


/*

let val = prices.shift()

console.log(` dlt is ${val}`)

console.log(prices);                                       */

// -------------------------------------------------------------

// -> using idx no : ending idx is non inclusive (not considered) - (1,5) = 1 to 4

/*

let words = [ "man", "women","lady","gentelman","boy","girl"];


console.log(words)
console.log("")
console.log(words.slice(1,3))                                 */

// -------------------------------------------------------

/*


let words = [ "man", "women","lady","gentelman","boy","girl"];

splice(start_idx,del_no,new_item)     / del_no :total no's to be deleted / items will be added to the  idx of items delted


it is used to delete items , and also used to replace other items

---------------------------------------------------------------------------

let female = [ "girl", "women", "lady","maa"];            // delete using splice 

female.splice(1,1)

console.log(female);                                            */

// //------------------------------------------------------------------------------

/*

let words = [ "man", "women","lady","gentelman","boy","girl"];

console.log(words)

words.splice(2,1,"manu")       // here lady is replaced with manu

console.log(words)                                                   */


//-----------------------------------------------------------------------------------

/*

let male = [ "man","gentelman","boy","man","gentelman","boy"];

console.log(male)

male.splice(2,0,"manoj")       // item is added  after second (2) idx

console.log(male)                                                       */ 


/*

asmnt qnt-1 

create an array to store companies --> "fortuner","benz","maruthi","TATA"
a. remove the first company from the array 
b. remove benz andd add "Thar"
c. add shift at end
                                                                       */

/*

//a.


let comp = ["fortuner","benz","maruthi","TATA"];

console.log(comp);

comp.shift()

console.log(comp);

//b.

comp.unshift("Thar");

console.log(comp);

//c.

comp.push("shift");

console.log(comp);


                                                                                       */































