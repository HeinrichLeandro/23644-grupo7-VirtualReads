import React from 'react'
import Logo from '../imagen/LogoVR.png'
import estilos from '../estilos/loginVista.css';
// import { auth } from '..firebase/credenciales';

function LoginVista() {
  return (
    <div className='container'>
      <div className="row">
        {/* columna formulario */}
        <div className="col-md-6">
          <div className="padre">
            <div className='mx-4'>
              {/* <img src={ImagenProfile} alt="" className='estilo-profile' /> */}
              <h1 className='text-center m-2 py-2 fs-3'>Inicia Sesión</h1>
              <form >
                <input type="text"
                  name="email"
                  placeholder='Ingresar Email'
                  className='cajatexto'
                  id='email' />

                <input type="password" name='password'
                  placeholder='Ingresar Contraseña'
                  className='cajatexto'
                  id='password' />

                <button className='btn btnform' type='submit'></button>
              </form>
              <p className='texto'><button></button></p>
            </div>
          </div>
        </div>
        {/* columna imagen */}
        <div className="col-md-6 seccionlogo">
          <img src={Logo} alt="Logo" className='tamaño-imagen' />
        </div>
      </div>
    </div>
  )
}

export default LoginVista