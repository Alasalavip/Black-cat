
import React from 'react';
import CartWidget from '../CartWidget';
import { FaCat } from 'react-icons/fa';
import './styles.css'
import {Link} from 'react-router-dom';
const NavBar = () => {
    return(
        <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/"><FaCat class="logo"/>Black Cat Studios</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link" aria-current="page" to="/category/men's clothing" >Hombres</Link>
              <Link class="nav-link" to="/category/women's clothing">Mujeres</Link>
              <Link class="nav-link" to="/category/electronics">Electronica</Link>
              <Link class="nav-link" to="/category/jewelery">Joyeria</Link>
              <Link class="nav-link derecha"  to="/">Ingresar</Link>
              <div class="cart"><CartWidget /></div>
              
              
            </div>
          </div>
        </div>
      </nav></div>
    )
}
export default NavBar;
