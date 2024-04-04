import Loading from './component/LoadingScreen'
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
//import { Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Logo from './Pages/Logo'
import Presentation from './Pages/Home'
import Projet from './Pages/Eprojets'


const App = () => {

  return (
    <div className="App">
      <Loading />  
      <Logo/>
      <Presentation/>
      <Projet/>
    </div>
  );
};

export default App;
