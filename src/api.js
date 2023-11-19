export function buscarLibros(){
    var search = document.getElementById('searchInput').value;
    
    fetch('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDfeBesAAxCA8CyF3ebH1-ea_wYUna70rQ&maxResults=40')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos.');
        }
        return response.json();
      })
      .then(data => {
        console.log('Respuesta de la API:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    
    };
    
    