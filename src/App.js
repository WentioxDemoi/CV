import Loading from './Menu/LoadingScreen'
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
//import { Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Logo from './Menu/Logo'
import Presentation from './Pages/Home'

const App = () => {
  // const [isLoaded, setIsLoaded] = useState(false);

  // // Utilisez useEffect pour simuler le chargement initial du site
  // useEffect(() => {
  //   // Simulez un délai de chargement
  //   const timer = setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 3000); // temps en millisecondes, ajustez selon vos besoins

  //   // Assurez-vous de nettoyer le timer lors du démontage du composant
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="App">
      {/* {isLoaded ? ( // Affiche le contenu après le chargement complet */}
        {/* <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <BrowserRouter>
          <Loading />  
          </BrowserRouter>
        </motion.div> */}
      {/* ) : ( // Affiche l'écran de chargement pendant le chargement initial */}
      <Loading />  
      <Logo/>
      <Presentation/>

    </div>
  );
};

export default App;
