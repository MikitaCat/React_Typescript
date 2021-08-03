import React from 'react';
import Navbar from './components/Navbar';
import ToDoForm from './components/ToDoForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <>
        <Navbar />
        <div className="container">
          <ToDoForm />
        </div>
      </>
    </div>
  );
};

export default App;
