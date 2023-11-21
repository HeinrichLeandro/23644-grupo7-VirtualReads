import React from 'react'

function Navbar() {
  return (
    <header>
    <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand" href="#">VirtualREADS</a>
    
            <a class="navbar-brand" href="#">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg" width="40" height="40" alt="imagen" />
            </a>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Usuario</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <div class="mb-3">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"></input>
          </div>
          <button type="button" class="btn btn-light">Iniciar sesion</button>
          <li class="nav-item">
            <a class="nav-link" href="#"> <img src="https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg" width="30" height="30"/> Registrarse</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
    </nav>
    </header>


  )
}

export default Navbar

