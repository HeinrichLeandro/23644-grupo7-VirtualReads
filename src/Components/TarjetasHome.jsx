import { render } from '@testing-library/react';
import './Estilos.css';
import React from 'react';
import { Link } from 'react-router-dom';

function TarjetasHome({book, onCardClick}) {
  return (
    <div className='contenedortarj contenedorHome'>
      {book.map((libro, index) => ( //Mapeo de la cantidad de items que devuelve la API
        <div key={index} className={`card mb-3 tarjeta${index + 1}`} >
          <div className="row g-0 tarjHome">
            <div className="col-md-4">
              <Link to={`/books/${index + 1}`} style={{textDecoration: 'none'}}><img src={libro.volumeInfo.imageLinks?.thumbnail || 'URL_IMAGEN_POR_DEFECTO'} className="img-fluid rounded-start imgLibro" alt={libro.volumeInfo.title} onClick={() => onCardClick(libro)} /></Link>
            </div>
            <div className="col-md-4">
              <div className="card-body text-start">
                <Link to={`/books/${index + 1}`} style={{textDecoration: 'none' , color: 'black'}}><h5 className="card-title" onClick={() => onCardClick(libro)}>{libro.volumeInfo.title}</h5></Link>
                <p className="card-text texto"><small className="text-body-secondary">Autor: {libro.volumeInfo.authors?.[0] || 'Desconocido'}</small></p>
                {/* <p className="card-text texto"><small>{libro.volumeInfo.description || 'Descripción no disponible'}</small></p> */}
                <p className="card-text texto"><small>Editorial: {libro.volumeInfo.publisher || 'Desconocido'}</small></p>
                <p className="card-text texto"><small>I.S.B.N: {libro.volumeInfo.industryIdentifiers?.[0]?.identifier || 'Desconocido'}</small></p>
                <p className="card-text texto"><small>Nro. de páginas: {libro.volumeInfo.pageCount || 'Desconocido'}</small></p>
                <p className="card-text texto"><small>Idioma: {libro.volumeInfo.language || 'Desconocido'}</small></p>
                <p className="card-text texto"><small>Formato: {libro.volumeInfo.printType || 'Desconocido'}</small></p>
                <p className="card-text texto"><small>Clasificación: {libro.volumeInfo.categories?.join(', ') || 'Desconocido'}</small></p>
                <p className="card-text texto"><small>Fecha de Publicación: {libro.volumeInfo.publishedDate || 'Desconocido'}</small></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TarjetasHome;