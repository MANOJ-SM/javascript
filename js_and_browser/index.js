localStorage.setItem("name","manu");

// lenght of localStorage 
console.log(localStorage.length);

//getting item in localStorage via index no 
console.log(localStorage.key(0));

//  another way to deleting item from localStorage

localStorage.hobby = "photography";
delete localStorage.hobby;

// sessionStorage 

sessionStorage.setItem("session","FSD");

const gettingItem = sessionStorage.getItem("session");

console.log(gettingItem);

sessionStorage.removeItem("session");

sessionStorage.clear();

const field = document.getElementById("random");

field.addEventListener("change", function(){
    sessionStorage.setItem("field",field.value);
});

