// https://dummyjson.com/products/1

function fetchData(){
    fetch(" https://dummyjson.com/products/1")
    .then(response => response.json())
    .then(result => console.log(result));
}

fetchData();
