let todos = [];

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Render Todos
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${todo.completed ? "completed" : ""}">
        ${todo.text}
      </span>
      <div>
        <button data-action="edit" data-index="${index}">Edit</button>
        <button data-action="delete" data-index="${index}">Delete</button>
      </div>
    `;

    todoList.appendChild(li);
  });
}

// Add Task
addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (!text) return;

  todos.push({ text, completed: false });
  todoInput.value = "";
  renderTodos();
});

// Event Delegation (Edit / Delete / Complete)
todoList.addEventListener("click", (e) => {
  const index = e.target.dataset.index;
  const action = e.target.dataset.action;

  if (action === "delete") {
    todos.splice(index, 1);
  }

  if (action === "edit") {
    const newText = prompt("Edit task:", todos[index].text);
    if (newText) todos[index].text = newText;
  }

  if (e.target.tagName === "SPAN") {
    todos[index].completed = !todos[index].completed;
  }

  renderTodos();
});
