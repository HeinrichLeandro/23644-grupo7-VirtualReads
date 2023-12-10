import './Estilos.css';
import React from 'react';
import { useEffect } from 'react'
import {Buscador} from './Buscador';


function Tarjeta({ book}) {
  

  return (
    <div>
    <div className='contenedortarj grid container'>
      {book.map((libro, index) => ( //Mapeo de la cantidad de items que devuelve la API
        <div key={index} className={`card mb-3 tarjeta${index + 1}`}>
          <div className="row g-0">
            <div className="col-md-6">
              <img src={libro.volumeInfo.imageLinks?.thumbnail || 'URL_IMAGEN_POR_DEFECTO'} className="img-fluid rounded-start imgLibro" alt={libro.volumeInfo.title} />
            </div>
            <div className="col-md-6">
              <div className="card-body text-start">
                <h5 className="card-title">{libro.volumeInfo.title}</h5>
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
      <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
    </nav>
    </div>
    
  );
}

export default Tarjeta;