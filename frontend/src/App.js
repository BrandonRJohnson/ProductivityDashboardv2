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
          <Route path='/' element={Home()}></Route>
          <Route path='/goals' element={Goals()}></Route>
          <Route path='/list' element={ToDoList()}></Route>
          <Route path='/projects' element={Projects()}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App