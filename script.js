document.addEventListener("DOMContentLoaded", function() {
    const todoInput = document.getElementById("todoInput");
    const addTodoBtn = document.getElementById("addTodoBtn");
    const todoList = document.getElementById("todoList");
    const markAllBtn = document.getElementById("markAllBtn");
    const clearCompletedBtn = document.getElementById("clearCompletedBtn");
    const clearAllBtn = document.getElementById("clearAllBtn");
  
    addTodoBtn.addEventListener("click", addTodo);
    todoInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") addTodo();
    });
  
    markAllBtn.addEventListener("click", markAllTodos);
    clearCompletedBtn.addEventListener("click", clearCompletedTodos);
    clearAllBtn.addEventListener("click", clearAllTodos);
  
    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        saveTodos();
        todoInput.value = "";
      }
    }
  
    function createTodoItem(todoText) {
      const todoItem = document.createElement("li");
      todoItem.textContent = todoText;
      todoItem.addEventListener("click", toggleTodoCompletion);
      return todoItem;
    }
  
    function toggleTodoCompletion() {
      this.classList.toggle("completed");
      saveTodos();
    }
  
    function markAllTodos() {
      const todos = document.querySelectorAll("#todoList li");
      todos.forEach(todo => {
        todo.classList.add("completed");
      });
      saveTodos();
    }
  
    function clearCompletedTodos() {
      const completedTodos = document.querySelectorAll("#todoList .completed");
      completedTodos.forEach(todo => {
        todo.remove();
      });
      saveTodos();
    }
  
    function clearAllTodos() {
      todoList.innerHTML = "";
      saveTodos();
    }
  
    function saveTodos() {
      const todos = [];
      const todoItems = document.querySelectorAll("#todoList li");
      todoItems.forEach(item => {
        todos.push({
          text: item.textContent,
          completed: item.classList.contains("completed")
        });
      });
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  
    function loadTodos() {
      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos) {
        todos.forEach(todo => {
          const todoItem = createTodoItem(todo.text);
          if (todo.completed) todoItem.classList.add("completed");
          todoList.appendChild(todoItem);
        });
      }
    }
  
    loadTodos();
  });
  