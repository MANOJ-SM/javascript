let promiseObject = fetch("https://dummyjson.com/products/1");

console.log(promiseObject);

promiseObject.then( response => response.json()
                        .then( result => console.log(result)));

promiseObject.catch( ERRresponse => console.log(ERRresponse));