import './App.css';
import Navbar from './Components/Navbar';
import Buscador from './Components/Buscador';
import Tarjeta from './Components/Tarjeta';
import Recomendados from './Components/Recomendados';
import React, { useState } from 'react';

function App() {
  const [bookData, setBookData] = useState([]);

  // Función para recibir los datos de búsqueda desde Buscador
  const handleBookData = (data) => {
    setBookData(data);
  };
  return (
    <div className="App">
      
    <Navbar/>

    <Buscador onBookData={handleBookData}/>

    <Recomendados/>
        
    <Tarjeta book={bookData}/>
    
    </div>
  );
}

export default App;
