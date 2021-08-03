import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { Itodo } from './interfases';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Itodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: Itodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos]);   First option
    setTodos((prev) => [newTodo, ...prev]);
  };

  return (
    <div className="App">
      <>
        <Navbar />
        <div className="container">
          <ToDoForm onAdd={addHandler} />
          <ToDoList todos={todos} />
        </div>
      </>
    </div>
  );
};

export default App;
