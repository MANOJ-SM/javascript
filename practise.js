

// function add(x,y){
//     add = x + y;
//     return add;
// }
                                     

// console.log("addition= ", add(5,5));         


// // check even or odd 

// function number(num){
//     if(num %2==0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }

// number(50)


// console.log("---------------------------------------------------------------------------------------------------------------------")


// // using function even or odd 


// function Even(num) {
//     return num % 2 === 0;
//   }
  
// function Odd(num) {
//     return num % 2 !== 0;
//   }
  
// console.log(" the given number is ",Even(8));             // true 
// console.log(Odd(7));                                      // true

// console.log("---------------------------------------------------------------------------------------------------------------------")

// function num(num) {
//     return num % 2 === 0;

// }

// console.log(num(6)) 


// console.log("---------------------------------------------------------------------------------------------------------------------")




// // boolean value

//  let a = 4
//  let b = 5

//  console.log(a < b)

//  console.log("---------------------------------------------------------------------------------------------------------------------")

// function jack(){
//     let a =9;
//     let b =16;
//     return a<b;
// }

// console.log(jack());

// console.log("---------------------------------------------------------------------------------------------------------------------")

// {
// let a = 5
// console.log( "a =",a )
// console.log("++a =", ++a)  // work and reflect 
// }

// console.log("---------------------------------------------------------------------------------------------------------------------")

// // let numm = prompt("enter a number = " );

// // if(numm %5 === 0){
// //     console.log("multiple of 5 ");
// // }else{
// //     console.log("not a multiple of 5");
// // }

// //p2.write a code which can give grade to students according to their scores

// // 90-100 * A
// // 70-89  * B
// // 60-69  * C
// // 50-59  * D
// // 0-49   * F


// // let score = prompt("enter the score : ");

// // if(score>=90 && score<=100){
// //     console.log("grade = A")
// // }else if(score>=70 && score<90){
// //     console.log("grade = B")

// // }else if(score>=60 && score<70){
// //     console.log("grade = C")

// // }else if(score>=50 && score<60){
// //     console.log("grade = D")

// // }else{
// //     console.log("grade = F")
// // }


// console.log("-------------------------------------------------------------------------------------------")


// // using prompt in a simple prgm


//  let x = prompt("enter x : ");

//  if(2<x<8){                  // x is greter then 2 and less then 8
//     console.log("true");
//  }else{
//     console.log("false")
//  }



//  console.log("-------------------------------------------------------------------------------------------")

// // sum of first 5 naural no's

// let sum=0;
// let m = 0;
// let size =0;

// for(let i=1;i<=5; i++){
//     sum = sum+i;
//     console.log("idx =", m , "sum =",sum)
//     m++;
//     size++;
// } 
// console.log("sum is ",sum); 
// console.log("size is ",size); 



// console.log("-------------------------------------------------------------------------------------------")

// // individual char of a string with its idx number


// let manu = "manumanumanu"

// let idx = 0;

// for(let i =0; i <manu.length; i++){
//     console.log(" value of index", i ,"is =",  manu[i])
// }


// console.log("-------------------------------------------------------------------------------------------")

// // even no's from 2 to 10

// for(let val=2; val<=10; val++){
//    if(val%2==0){
//     console.log(val);
//    }

// }


// console.log("-------------------------------------------------------------------------------------------")

// // even no's from 2 to 10


// for(let val=2; val<=10; val+=2){         // val = val + 2
//    console.log(val);
// }




// console.log("-------------------------------------------------------------------------------------------")


// // multiplication tables from 1 to 20


// for (let i = 1; i <= 20; i++) {
//     for (let j = 1; j <= 10; j++) {
//       console.log(i, "*", j ,"=",i * j);             
//     }
//     console.log("-----------")
//   }

// //  ---------------------------------------------------

// console.log("-------------------------------------------")


// //  trial 

// function number(num){
//     if(num %2==0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }

// number(8)


// sum=0;
// size=0;
// for(let i=1;i<=5; i++){
//     sum = sum+i;
    
//     size++
// } 
// console.log("sum is ",sum);
// console.log("size is : ", size);


// let i = 0;
// while( i<=5){
//     console.log(i);
//     i++;
// }

// let student={
//     name : "rahul",
//     age : 25,
//     cgpa :7.5,
// }

// for(let i in student){
//     console.log("key =", i, "&" ,"values =", student[i]);
// }

// let student1 = document.getElementById("img1").src = "bird.jpeg";

// let student11 = document.getElementById("img1").src = "bird.jpeg";
// student11.innerHTML = "<h3> hello new heading added </h3>"
// let manu = document.getElementsByTagName("p");
 


// const arr = [ 2,3,4,5,6,7,9];

// function square(x){
//     return x * x
// }

// const squaredArray = arr.map(square);
// console.log(squaredArray);


// const sq = arr.map( x => { return x * x} );

// const DoubledArray = arr.map(x => { return 2 * x });          // input => { 
//     console.log(DoubledArray);


// const marks = [ 23,34,45,56,34,39,67,56,68,];

// const goodMarks = marks.filter(mark => mark > 50);
// console.log(goodMarks);

// const marks = [ 1,2,3,4];

// const sum = marks.reduce( (acc,cur) => {
//     acc = acc + cur;
//     return acc;
// },0);
// console.log(sum);


// const arr = [1,2,3,4,5,6];

// const new_array = arr.filter( ele =>  {
//     return ele % 2 == 0;                    // 2,4,6
// }).map( ele => {
//     return ele * ele;                       // 4,16,36
// }).reduce( (acc,ele) => {
//     acc = acc + ele;                        // 56
//     return acc;                              
// },0)

// console.log(new_array);

// function sumOfSquarednumbers(numbers){
//     return numbers
//     .filter( ele => ele % 2 == 0)
//     .map(ele => ele*ele)
//     .reduce( (acc,ele) => acc + ele)

// }

// const numbers = [1,2,3,4,5,6];
// console.log(sumOfSquarednumbers(numbers));

// var a =10;
// console.log(a);


// greeting();

// function greeting(){
//     console.log("dsAF");
// }


// const user = {
//     name : "manu",                                           // properties 
//     city : "sgn",
//     printDetails : function(){                                   // method 
//         console.log(`i am ${this.name} from ${this.city}`);     
//     }
//  };

// console.log(user.__proto__);


// const promise = new Promise( (resolve,reject) => {

//     let promiseResult;

//     setTimeout( () => {
//         promiseResult = true;
//         if(promiseResult){
//             resolve("pass")
//         }else{
//             reject("fail");
//         }
//     },3000);
// });

// promise.then( result => console.log(result));
// promise.catch( error => console.log(error));


// async  function fetchData(){
//     try{
//             const response = await fetch("");
//             const result = await response.json();
//             console.log(result);

//     }catch (error ){
//         console.log(error);
//     }
// }

// fetch();


// class Customer{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     get info(){
//         return this.name;
//     }

//     printDetails(){
//         console.log(`name and email of customer is ${this.name} and ${this.email}`);
//     }
// }

// const customer1 = new Customer("jhon","abc@gmail.com");
// console.log(customer1);
// console.log(customer1.info);

// customer1.printDetails();


// class newCustomer extends Customer{
//     constructor(name,email,id){
//         super(name,email);
//         this.id = id;
//     }

//     customerid(){
//         console.log(`this is new customer with id ${this.id}`);
//     }
// }

// const customer2 = new newCustomer("jhon","abc@gmail.com","101");
// customer2.customerid();

localStorage.setItem("name","manoj");

const val = localStorage.getItem("name");
console.log(val);

