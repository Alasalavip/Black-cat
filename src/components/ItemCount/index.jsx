import React from "react";
import { useState } from "react";
import "./style.css"


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    const handleAdd = () => {
        if(count < stock) {
        setCount(count+1)
        }
        else {
        alert ("No hay stock")
        }
    }
    const handledecrement = () => {
        if ( count > initial) {
            setCount(count-1)
        }
    }
    return (
    <div>
        <div class="contador">
        <button  class= "menos"onClick={handledecrement}>-</button>
        <h2 class= "cantidad">{count}</h2>
        <button class= "mas" onClick={handleAdd}>+</button>
        </div>
        <br/>
        <button class="agregar" onClick={() =>onAdd(count)}>Agregar al carrito</button>
    </div>
    )
};
export default ItemCount;