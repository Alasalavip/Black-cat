import React from "react";
import { useState } from "react";
import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";
import { products } from "../../components/data/products";
import './style.css';
import { useEffect } from "react";
const ItemListContainer = ({greeting}) => {
   const [Productos, setProductos] = useState([]) 
   useEffect(()=> {
(async ()=> {
    const obtenerProductos = new Promise ((accept, reject)=> {
        setTimeout (()=> {
            accept(products)
        }, 3000)
    })
    try {
        const productos = await obtenerProductos;
        setProductos(productos);
    }catch(error) {
        console.log(error);
    }
})()
   })
    
    return (
        <div><h1>{greeting}</h1> 
        <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;