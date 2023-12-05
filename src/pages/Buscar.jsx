import React, { useState }from 'react';
import Navbar from '../Components/Navbar';
import Buscador from '../Components/Buscador';
import Tarjeta from '../Components/Tarjeta';



export function Buscar() {
  const [bookData, setBookData] = useState([]);
  // Función para recibir los datos de búsqueda desde Buscador
  const handleBookData = (data) => {
    setBookData(data);
  };

  return (
    <div>
      <Navbar />

      <Buscador onBookData={handleBookData} />

      <Tarjeta book={bookData} />
    </div>
  )
}