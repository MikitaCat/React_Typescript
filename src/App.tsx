import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import TodosPage from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} exact path="/" />
          <Route component={AboutPage} exact path="/info" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
