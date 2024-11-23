

const field = document.getElementById("random");

field.addEventListener("change", function(){
    sessionStorage.setItem("field",field.value);
});

