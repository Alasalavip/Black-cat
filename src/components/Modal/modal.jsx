import React, { Fragment,  useState} from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";




const Modal = ({cerrar}) => {
   const [datos, setDatos] = useState({
    nombre:'',
    email:'',
    telefono:'',
    direccion:'',
   });
  
    const navigate = useNavigate(); 
    const evento = (event) => {
    setDatos({...datos, [event.target.name]:event.target.value})
    return datos
    }
    
    const enviarDatos = (event) => {
        event.preventDefault();
        localStorage.setItem('nombre',datos.nombre)
        localStorage.setItem('email',datos.email)
        localStorage.setItem('telefono',datos.telefono)
        localStorage.setItem('direccion',datos.direccion)
        navigate('/cart')
    }
  
    return (
        
        <Fragment>
            <div className="background">
            <form onSubmit={enviarDatos} className="modal-container" >
            <button onClick={() => cerrar(false)} className="salir">X</button>
                <h2 className="title">Complete el formulario para finalizar la compra </h2>
                <label htmlFor="nombre">Nombre</label>
          <input
            name="nombre"
            type="text"
            placeholder="Ingresa tu nombre"
            onChange = {evento}
          />
          <label htmlFor="email">Correo Electrónico</label>
          <input
            name="email"
            type="email"
            placeholder="ejemplo@gmail.com"
            onChange = {evento}
          />
          <label htmlFor="Telefono">Telefono</label>
          <input
            name="telefono"
            type="number"
            placeholder="1111111111"
            onChange = {evento}
          />
           <label htmlFor="Direccion de envio">Direccion de envio</label>
          <input
            name="direccion"
            type="text"
            placeholder="Avenida siempre viva 123"
            onChange = {evento}
          />
                <div className="buttons-container">
                    <button type="submit" className="comprar" >Continuar</button>
                </div>
            </form>
        </div>
        </Fragment>
        
        
        
    );
};

export default Modal;
