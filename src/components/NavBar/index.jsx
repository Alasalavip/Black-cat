
import React from 'react';
import CartWidget from '../CartWidget';
import { FaCat } from 'react-icons/fa';
import './styles.css'
import {Link} from 'react-router-dom';
const NavBar = () => {
    return(
        <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><FaCat className="logo"/>Black Cat Studios</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/category/men's clothing" >Hombres</Link>
              <Link className="nav-link" to="/category/women's clothing">Mujeres</Link>
              <Link className="nav-link" to="/category/electronics">Electronica</Link>
              <Link className="nav-link" to="/category/jewelery">Joyeria</Link>
              
              <Link className="cart" to="/cart"><CartWidget  /></Link>
            </div>
          </div>
        </div>
      </nav></div>
    )
}
export default NavBar;
