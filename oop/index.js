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


const user = {
    name : "manu",                                           // properties 
    city : "sgn",
    printDetails : function(){                                   // method 
        console.log(`i am ${this.name} from ${this.city}`);     
    }
 };
