import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../App';

const Path = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/Home" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default Path;