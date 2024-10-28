

function simplePromiseDemo(success) {
    // Return a Promise
    return new Promise((Resolve,reject) => {

    // Log "Promise is pending..."
    
    console.log("Promise is pending...");

    // Simulate a network request with setTimeout
    setTimeout( () => {
            if(success){
                Resolve("Promise fulfilled: Data received!");
            }
            else{
                reject("Promise rejected: Error occurred!");
            }
        },2000);
        
    });


}
    
    

// Demonstrate fulfilled state
simplePromiseDemo(true).then( result => console.log(result));

// Demonstrate rejected state
simplePromiseDemo(false).catch( err => console.log(err));


