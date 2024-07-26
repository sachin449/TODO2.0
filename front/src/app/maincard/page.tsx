"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Button, Card } from '@shadcn/ui';

const MainCard = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    // Fetch todos from the backend (MongoDB)
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/api/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!newTodo) return;
    try {
      const response = await axios.post('/api/todos', { text: newTodo });
      setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const removeTodo = async (id: string) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error removing todo:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Todo App</h1>
      <div className="mb-4">
        <Input 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          placeholder="Add a new todo" 
          className="mr-2"
        />
        <Button onClick={addTodo}>Add</Button>
      </div>
      <div className="grid gap-4">
        {todos.map(todo => (
          <Card key={todo._id} className="p-4 flex justify-between items-center">
            <span>{todo.text}</span>
            <Button onClick={() => removeTodo(todo._id)}>Remove</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MainCard;
