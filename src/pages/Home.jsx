import React, { useState }from 'react';
import Navbar from '../Components/Navbar';
import Buscador from '../Components/Buscador';
import TarjetasHome from '../Components/TarjetasHome';
import Recomendados from '../Components/Recomendados';
import Tarjeta from '../Components/Tarjeta';



export function Home() {
  const [bookData, setBookData] = useState([]);
  // Función para recibir los datos de búsqueda desde Buscador
  const handleBookData = (data) => {
    setBookData(data);
  };

  return (
    <div>
      <Navbar />

      <Buscador onBookData={handleBookData} />

      <Recomendados onBookData={handleBookData} />

      <TarjetasHome book={bookData} />
    </div>
  )
}