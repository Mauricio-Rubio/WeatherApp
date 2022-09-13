import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from "./pages/Login"
import Main from "./pages/Main"
import {useState} from 'react';
function App() {
  return (
    
    <Router>    
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/Main" element={<Main llave="esta es la llave" name="esta" />} />
    </Routes>
  </Router>
  );
}

export default App;
