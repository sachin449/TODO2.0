// src/components/AddTodo.jsx
import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Add new todo"
        className="flex-grow border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 rounded hover:bg-indigo-700"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
