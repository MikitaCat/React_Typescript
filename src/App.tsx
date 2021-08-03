import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ToDoForm from './components/ToDoForm';

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const addHandler = (title: string) => {
    console.log('Added', title);
  };

  return (
    <div className="App">
      <>
        <Navbar />
        <div className="container">
          <ToDoForm onAdd={addHandler} />
        </div>
      </>
    </div>
  );
};

export default App;
