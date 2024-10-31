
// individual calls not dependent on each other 
// i want to know once this all are done 
// to resolve multiple promises -> Promises.all


const firstObject = fetch("https://dummyjson.com/products/1")
                            .then( response => response.json());



const secondObject = fetch("https://dummyjson.com/users/1")
                            .then( response => response.json());



const thirdObject = fetch("https://dummyjson.com/posts/1")
                            .then( response => response.json());


// resolving of promise all thoghter                             

// Promise.all([firstObject,secondObject,thirdObject])
//     .then(responses => {
//         for(const response of responses ){
//             console.log(response);
//         }
//     })
                         
                            
                            