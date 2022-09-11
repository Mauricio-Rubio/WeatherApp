import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from "./components/Login"
function App() {
  return (
    
    <Router>    
    <Routes>
      <Route exact path="/" element={<Login/>} />
      {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
