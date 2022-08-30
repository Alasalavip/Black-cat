import React from "react";
import ItemCount from "../../components/ItemCount";
import './style.css';
const ItemListContainer = ({greeting}) => {
    const agegarAlCarrito = (cantidad) => {
        console.log('La cantidad de objetos agregados es :' , {cantidad} );
    }
    return (
        <div><h1>{greeting}</h1> 
        <ItemCount initial={1} stock={5} onAdd={agegarAlCarrito}/>
        </div>
    )
}
export default ItemListContainer;