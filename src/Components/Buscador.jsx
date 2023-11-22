import './Estilos.css'
import React ,{useState}from "react";
    
function Buscador({onBookData}) {
const [search,setSearch]=useState("");
const [genre, setGenre] = useState('Género');
const [year, setYear] = useState('Año de publicación');
const [year2, setYear2] = useState('Año de publicación2');
const [author, setAuthor] = useState('Autor');
const [language, setLanguage] = useState('Idioma');
//Función para buscar los libros
function buscarLibros(){
    // var search = document.getElementById('searchInput').value;
    const apiUrl =
    'https://www.googleapis.com/books/v1/volumes?q=' +
    search +
    (genre !== 'Género' ? `+subject:${genre}` : '')+
    (year !== 'Año de publicación' ? `&before:1+ene+${year}` : '') +
    (year2 !== 'Año de publicación2' ? `&after:1+ene+${year2}` : '') +
    (author !== 'Autor' ? `+inauthor:${author}` : '') +
    (language !== 'Idioma' ? `&langRestrict=${language}` : '') +
    `&key=AIzaSyDfeBesAAxCA8CyF3ebH1-ea_wYUna70rQ&maxResults=2`;

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

    function busquedaRapida(){
        // var search = document.getElementById('searchInput').value;
        const apiUrl =
        'https://www.googleapis.com/books/v1/volumes?q=' +
        search +
        `&key=AIzaSyDfeBesAAxCA8CyF3ebH1-ea_wYUna70rQ&maxResults=2`;
    
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
  return ( 
    <div className='buscador'>
        <nav class="navbar">
            <div class="container-fluid">
                <img src="https://images.vexels.com/media/users/3/143466/isolated/preview/b47bfb19d11e66c3be00ccb0632047ce-lupa-simple.png" class="img-fluid" width="30" height="30" />
                <form class="d-flex mt-3" role="search">
                    <input id='searchInput' class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" value={search} onChange={e=>setSearch(e.target.value)}/>
                    <button class="btn btn-outline-success" onClick={busquedaRapida}>Buscar</button>
                </form>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBuscador" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span ><img src="https://cdn-icons-png.flaticon.com/512/6526/6526846.png" class="img-fluid"  width="30" height="30"/></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasBuscador" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Personalizar búsqueda</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3"> 

                            <input id='searchInput' class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" value={search} onChange={e=>setSearch(e.target.value)}/>                           
                            <br/>

                            <select class="form-select" aria-label="Default select example"onChange={(e) => setGenre(e.target.value)} >
                                <option selected>Género</option>
                                <option value="fantasy">Fantasía</option>
                                <option value="mystery">Misterio</option>
                                <option value="religion">Religión</option>
                            </select>
                            <br/>

                            <select class="form-select" aria-label="Default select example">
                                <option selected>Editorial</option>
                                <option value="1">Presencial</option>
                                <option value="2">Virtual</option>
                                <option value="3">Sincrónico</option>
                                <option value="4">Asincrónico</option>
                            </select>
                            <br/>

                            <select class="form-select" aria-label="Default select example" onChange={(e) => setYear2(e.target.value)}>
                                <option selected>Año de publicación inicial</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                            </select>
                            <br/>

                            <select class="form-select" aria-label="Default select example" onChange={(e) => setYear(e.target.value)}>
                                <option selected>Año de publicación final</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                            </select>
                            <br/>

                            <select class="form-select" aria-label="Default select example">
                                <option selected>Codigo ISBN</option>
                                <option value="1">Pendiente</option>
                                <option value="2">Pendiente</option>
                                <option value="3">Pendiente</option>
                                <option value="4">Pendiente</option>
                            </select>
                            <br/>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label float-start px-2">Autor</label>
                                <input type="text" class="form-control" aria-describedby="Default text example" onChange={(e) => setAuthor(e.target.value)} />
                            </div>
                            <br/>

                            <select class="form-select" aria-label="Default select example" onChange={(e) => setLanguage(e.target.value)}>
                                <option selected>Idioma</option>
                                <option value="en">Inglés</option>
                                <option value="es">Español</option>
                                <option value="pt">Portugués</option>
                                <option value="fr">Francés</option>
                            </select>
                            <br/>

                            <select class="form-select" aria-label="Default select example">
                                <option selected>Edición</option>
                                <option value="1">Pendiente</option>
                                <option value="2">Pendiente</option>
                                <option value="3">Pendiente</option>
                                <option value="4">Pendiente</option>
                            </select>
                            <br/>

                        </ul>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button type="button" class="btn btn-primary" onClick={buscarLibros}>Aplicar</button>
                        </div>
      </div>
    </div>
    </div>
    </nav>
    </div>

    
   )
}

export default Buscador