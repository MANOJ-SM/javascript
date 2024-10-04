

const user = {
   fname : "manoj",
   lname :"medleri",
   printFullname : function (){
         console.log(`my name is ${this.fname} ${this.lname}`);
   }
}

user.printFullname();       

// printfullname  methode is called using user obj hence the this inside method will point to obj 
                    


