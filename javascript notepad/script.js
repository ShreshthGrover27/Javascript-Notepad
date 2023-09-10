const saveButton = document.querySelector("#save");
const inputBox = document.querySelector("#text");
const clearButton = document.querySelector("#clear");
inputBox.value = localStorage.getItem('todo');
function saveTodo(event) {
  const text = inputBox.value;
  const clicked = event.target;
  if (clicked.matches("#save")) {
    localStorage.setItem("todo", text);
  }
}
saveButton.addEventListener("click", saveTodo);
function clearTodo(event){
    const clicked = event.target;
    if(clicked.matches("#clear")){
        localStorage.clear();
        inputBox.value="";
    }
}
clearButton.addEventListener("click",clearTodo);

