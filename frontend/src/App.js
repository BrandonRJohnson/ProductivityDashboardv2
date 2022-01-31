import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Goals from './pages/Goals';
import ToDoList from './pages/ToDoList';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' component={Home} />
          <Route path='/goals' component={Goals} />
          <Route path='/list' component={ToDoList} />
          <Route path='/projects' component={Projects} />
        </Routes>
      </Router>
    </>
  );
}

export default App