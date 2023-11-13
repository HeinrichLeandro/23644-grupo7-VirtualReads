import './Estilos.css';
import React from 'react'

function Tarjeta() {
  return ( 
    <div className='conternedortarj'>
        <div class="card mb-3" style={{maxwidth: "540px"}} className='tarjeta'>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://i.pinimg.com/736x/81/c0/8b/81c08b81cfd5d42f429d9047567ce16f.jpg" class="img-fluid rounded-start" alt="harry potter" />
                </div>
                <div class="col-md-8">
                    <div class="card-body text-start">
                        <h5 class="card-title">Harry Potter y la piedra filosofal</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3" style={{maxwidth: "540px"}} className='tarjeta'>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://i.pinimg.com/736x/81/c0/8b/81c08b81cfd5d42f429d9047567ce16f.jpg" class="img-fluid rounded-start" alt="harry potter" />
                </div>
                <div class="col-md-8">
                    <div class="card-body text-start">
                        <h5 class="card-title">Harry Potter y la piedra filosofal</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    )
}

export default Tarjeta