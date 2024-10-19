const textarea = document.querySelector(".textarea");

const button = document.querySelector("button");

const todolist = document.querySelector(".to-do-list");


button.addEventListener("click", addItem);

function addItem(){
    // console.log(textarea.value);

    const tododiv = document.createElement("div");
    const item = document.createElement("p");
    item.innerHTML = textarea.value;

    tododiv.appendChild(item);

    const delButton = document.createElement("button");
    delButton.innerHTML = "del";
    delButton.classList.add("trash-button")

    // delButton.classList.add()                             //  to add styles to delButton
   
    tododiv.appendChild(delButton);

    if(textarea.value == '') return;

    todolist.appendChild(tododiv);  // adding custom div inside html empty div 
    textarea.value = '';

}


todolist.addEventListener("click", deleteItem);

function deleteItem(e){
    const item = e.target;

    if(item.classList[0]  == "trash-button"){
        const parent = item.parentNode;
        parent.remove();
    }
}