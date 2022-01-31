import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Goals from './pages/Goals';
import ToDoList from './pages/ToDoList';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/goals' component={Goals} />
          <Route path='/list' component={ToDoList} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App