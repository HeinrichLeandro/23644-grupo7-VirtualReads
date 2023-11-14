import './Estilos.css';
import React from 'react'

function Tarjeta() {
  return ( 
    <div className='conternedortarj'>
        <div class="card mb-3" className='tarjeta'>
            <div class="row g-0">
                <div class="col-md-6">
                    <img src="https://i.pinimg.com/736x/81/c0/8b/81c08b81cfd5d42f429d9047567ce16f.jpg" class="img-fluid rounded-start" alt="harry potter" />
                </div>
                <div class="col-md-6">
                    <div class="card-body text-start">
                        <h5 class="card-title">Harry Potter y la piedra filosofal</h5>
                        <p class="card-text" className='texto'><small class="text-body-secondary">Autor: J. K. Rowling</small></p>
                        <p class="card-text" className='texto'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis aspernatur veniam optio doloremque quisquam a quasi obcaecati illo, dicta dolorem odit deserunt necessitatibus deleniti odio. Quis, ea dolores. Harum?</small></p>
                        <p class="card-text" className='texto'><small>Editorial:</small></p>
                        <p class="card-text" className='texto'><small>I.S.B.N:</small></p>
                        <p class="card-text" className='texto'><small>Nro. de páginas:</small></p>
                        <p class="card-text" className='texto'><small>Idioma:</small></p>
                        <p class="card-text" className='texto'><small>Formato:</small></p>
                        <p class="card-text" className='texto'><small>Clasificación:</small></p>
                        <p class="card-text" className='texto'><small>Fecha de Publicación:</small></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3" className='tarjeta tarjeta2'>
            <div class="row g-0">
                <div class="col-md-6">
                    <img src="https://i.pinimg.com/736x/81/c0/8b/81c08b81cfd5d42f429d9047567ce16f.jpg" class="img-fluid rounded-start" alt="harry potter" />
                </div>
                <div class="col-md-6">
                    <div class="card-body text-start">
                        <h5 class="card-title">Harry Potter y la piedra filosofal</h5>
                        <p class="card-text" className='texto'><small class="text-body-secondary">Autor: J. K. Rowling</small></p>
                        <p class="card-text" className='texto'><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis aspernatur veniam optio doloremque quisquam a quasi obcaecati illo, dicta dolorem odit deserunt necessitatibus deleniti odio. Quis, ea dolores. Harum?</small></p>
                        <p class="card-text" className='texto'><small>Editorial:</small></p>
                        <p class="card-text" className='texto'><small>I.S.B.N:</small></p>
                        <p class="card-text" className='texto'><small>Nro. de páginas:</small></p>
                        <p class="card-text" className='texto'><small>Idioma:</small></p>
                        <p class="card-text" className='texto'><small>Formato:</small></p>
                        <p class="card-text" className='texto'><small>Clasificación:</small></p>
                        <p class="card-text" className='texto'><small>Fecha de Publicación:</small></p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    )
}

export default Tarjeta