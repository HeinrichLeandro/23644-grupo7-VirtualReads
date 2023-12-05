import './Estilos.css';
import React from 'react';



function masVistos({onBookData}){
    // var search = document.getElementById('searchInput').value;
    const apiUrl =
    'https://www.googleapis.com/books/v1/volumes?q=a' + `&key=AIzaSyDfeBesAAxCA8CyF3ebH1-ea_wYUna70rQ&orderBy=relevance&maxResults=2`;

    //  +
    // (publisher !== 'Editorial' ? `&inpublisher=${publisher}` : '') +
    // (year !== 'Año de publicación' ? `&publishedDate=${year}` : '') +
    // (isbn !== 'Codigo ISBN' ? `&isbn=${isbn}` : '') +
    // (author !== 'Autor' ? `&inauthor=${author}` : '') +
    // (language !== 'Idioma' ? `&language=${language}` : '') +
    // (edition !== 'Edición' ? `&edition=${edition}` : '');

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos.');
        }
        return response.json();
      })
      .then(data => {
        console.log('Respuesta de la API:', data);
        onBookData(data.items);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    
      
    
    };


function TarjetasHome({ book }) {
  return (
    <div className='conternedortarj'>
        <button onClick={masVistos}>hola</button>
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
  );
}

export default TarjetasHome;