import './App.css';
import Navbar from './Components/Navbar';
import Buscador from './Components/Buscador';
import Tarjeta from './Components/Tarjeta';
import Recomendados from './Components/Recomendados';

function App() {
  return (
    <div className="App">
      
    <Navbar/>

    <Buscador/>

    <Recomendados/>
        
    <Tarjeta/>
    
    </div>
  );
}

export default App;
