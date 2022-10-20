import React from "react";
import { useState } from "react";
import "./style.css"


const ItemCount = ({ stock,initial,onAdd}) => {
   

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
        <div className="contador">
        <button  className= "menos"onClick={handledecrement}>-</button>
        <h2 className= "cantidad">{count}</h2>
        <button className= "mas" onClick={handleAdd}>+</button>
        </div>
        <br/>
        <button className="agregar" onClick={() =>onAdd(count)}>Agregar al carrito</button>
    </div>
    )
};

export default ItemCount;