import Loading from './component/LoadingScreen'
import { Reveal } from './component/Reveal.tsx'
import React, { useState, useEffect } from 'react';
import Logo from './Pages/Logo'
import Presentation from './Pages/Home'
import Projet from './component/TimelineComponent'
import Parcours from './Pages/Timeline'


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
