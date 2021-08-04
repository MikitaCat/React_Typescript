import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TodosPage from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <>
        <Navbar />
        <div className="container">
          <TodosPage />
        </div>
      </>
    </div>
  );
};

export default App;
