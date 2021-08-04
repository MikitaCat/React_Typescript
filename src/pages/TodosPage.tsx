import React, { useState, useEffect } from 'react';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import { Itodo } from '../interfases';

declare var confirm: (question: string) => boolean;

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<Itodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Itodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: Itodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos]);   First option
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you shure?');

    if (shouldRemove) {
      setTodos((prev) =>
        prev.filter((todo) => {
          return todo.id !== id;
        }),
      );
    }
  };
  return (
    <>
      <ToDoForm onAdd={addHandler} />
      <ToDoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </>
  );
};

export default TodosPage;
