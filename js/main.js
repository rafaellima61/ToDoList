let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('ToDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('dblclick', function(){
        paragraph.style.textDecoration = "line-through";
    })
})