
import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css'
const NavBar = () => {
    return(
        <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img class='logo' src="https://raw.githubusercontent.com/Alasalavip/ProyectoFinal-Naciff/master/imagenes/Logo.png" alt="logo" /> Black Cat Studios</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" aria-current="page" href="#">Noticias</a>
              <a class="nav-link" href="#">Sobre nosotros</a>
              <a class="nav-link" href="#">Productos</a>
              <a class="nav-link derecha"  href="#">Ingresar</a>
              <CartWidget/>
              
            </div>
          </div>
        </div>
      </nav></div>
    )
}
export default NavBar;
