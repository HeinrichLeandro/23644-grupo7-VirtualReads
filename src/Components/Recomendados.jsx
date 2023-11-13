import './Estilos.css';
import React from 'react'

function Recomendados() {
  return ( 
  <div className='recomendados'>

    <ul class="nav nav-underline justify-content-center">
        <li class="nav-item">
            <a class="nav-link link-dark active" aria-current="page" href="#">Recomendados</a>
        </li>
        <li class="nav-item">
            <a class="nav-link link-dark" href="#">Mas Vendidos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link link-dark" href="#">Novedades</a>
        </li>
    </ul>

    </div>

    )
}

export default Recomendados