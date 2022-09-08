import React from "react";
import { IoLogoGameControllerB} from 'react-icons/io';
import './style.css';
const Item = ({product}) => {
    return (
       <div class= "card">
        <IoLogoGameControllerB class="control"/>
        <h2>{product.name}</h2>
        <h3>{product.descripcion}</h3>
        <h4>Precio:{product.precio}</h4>
       </div>
    )
}
export default Item