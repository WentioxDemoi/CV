import Loading from './component/LoadingScreen'
import Logo from './Pages/Logo'
import Presentation from './Pages/Home'
import Projet from './Pages/Eprojets'
import Parcours from './Pages/Parcours'


const App = () => {

  return (
    <div className="App">
      <Loading />  
      <Logo/>
      <Presentation/>
      <Parcours/>
      <Projet/>
    </div>
  );
};

export default App;
