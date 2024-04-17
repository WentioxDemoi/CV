import Loading from './component/LoadingScreen'
import React, { useState, useEffect } from 'react';
import Logo from './Pages/Logo'
import Presentation from './Pages/Home'
import Projet from './component/TimelineComponent'
import Parcours from './Pages/Timeline'
import Particlesbg from './component/Particles';
import './App.css'


const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Loading />
      {showContent && (
        <>
          <Particlesbg id="particles"/>
          <Logo />
          <Presentation />
          <Parcours />
          <Projet />
        </>
      )}

    </div>
  );
};

export default App;
