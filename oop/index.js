// "use strict"

// function abc(){
//     console.log("abc");
//     console.log(this);  // global object 
// }

// abc();  


// function manu(){
//     console.log("hi manu !");
// }

// window.manu();


// const user = {
//     name : "manu",                                           // properties 
//     city : "sgn",
//     printDetails : function(){                                   // method 
//         console.log(`i am ${this.name} from ${this.city}`);     
//     }
//  };


//  const promise = new Promise( (resolve,reject) => {

//         let promiseResult;

//         setTimeout( () => {
//             promiseResult = true;
//             if(promiseResult){
//                 resolve("pass")
//             }else{
//                 reject("fail");
//             }
//         },3000);
//  });

// promise.then( result => console.log(result));
// promise.catch( error => console.log(error));

// async function feactDataResponse(){

//     try {
//         const response = await fetch(" https://dummyjson.com/products/1");
//        const result = await respose.json();
//        console.log(result);
//     } catch( error){
//         console.log(error);
//     }
// }

// feactDataResponse();

localStorage.setItem("name","manoj");

const val = localStorage.getItem("name");
console.log(val);

