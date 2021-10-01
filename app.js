let todoInput = document.getElementById("todo-input");
let addBtn = document.getElementById("add-todo");
let taskList = document.getElementById("task-list");
let el = document.getElementsByTagName("li");

// Function to get and append user input
addBtn.addEventListener("click", () => {
  let userInput = todoInput.value;
  if (userInput === "") {
    alert("Please add a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = userInput;
    taskList.insertBefore(li, taskList.childNodes[0]);
    todoInput.value = "";
  }
});

// Function to mark done subject
taskList.addEventListener("click", () => {
  
});
