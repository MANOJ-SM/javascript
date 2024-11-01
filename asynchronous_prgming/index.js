
function fetchData(){
    fetch("https://dummyjson.com/products/1")
    .then(response => response.json())
    .then( result => console.log(result));
}

fetchData();

// chaining of promise -> fetch is giving a promise then response .json() is giving a promise then result is giving a promise
