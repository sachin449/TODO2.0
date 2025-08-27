// src/App.jsx
import React, { useState, useEffect } from "react";

// Utility to get current date string in YYYY-MM-DD format
const getTodayDateString = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

// Utility to load todos from localStorage for a given date
const loadTodosForDate = (date) => {
  try {
    const todosJSON = localStorage.getItem("todos");
    if (!todosJSON) return [];
    const allTodos = JSON.parse(todosJSON);
    return allTodos[date] || [];
  } catch (e) {
    console.error("Failed to load todos:", e);
    return [];
  }
};

// Utility to save todos for a given date to localStorage
const saveTodosForDate = (date, todos) => {
  try {
    const todosJSON = localStorage.getItem("todos");
    const allTodos = todosJSON ? JSON.parse(todosJSON) : {};
    allTodos[date] = todos;
    localStorage.setItem("todos", JSON.stringify(allTodos));
  } catch (e) {
    console.error("Failed to save todos:", e);
  }
};

const App = () => {
  const [selectedDate, setSelectedDate] = useState(getTodayDateString());
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  // Load todos for the selected date
  useEffect(() => {
    const todosForDate = loadTodosForDate(selectedDate);
    setTodos(todosForDate);
  }, [selectedDate]);

  // Handler to add a new todo
  const handleAddTodo = () => {
    if (!newTodoText.trim()) return;

    const newTodo = {
      id: Date.now(),
      title: newTodoText.trim(),
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodosForDate(selectedDate, updatedTodos);
    setNewTodoText("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-4">Todo App - {selectedDate}</h1>

      {/* Add Todo Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add new todo"
          className="flex-grow border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddTodo();
          }}
        />
        <button
          onClick={handleAddTodo}
          className="bg-indigo-600 text-white px-4 rounded hover:bg-indigo-700"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul>
        {todos.length === 0 && (
          <li className="text-gray-500 italic">No todos for this day.</li>
        )}
        {todos.map((todo) => (
          <li key={todo.id} className="border-b py-2">
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
