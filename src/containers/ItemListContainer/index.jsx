import React from "react";
import { useState } from "react";
//import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";
import './style.css';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const ItemListContainer = ({greeting}) => {
   const [productos, setProductos] = useState([]) 
   const {categoryId} = useParams();
   console.log(categoryId)
   useEffect(()=> {
(async ()=> {
    
    try {
        if (categoryId){
            const response = await fetch(
              "https://fakestoreapi.com/products/category/" + categoryId
          );
          const productos = await response.json();
          setProductos(productos);
          }
          else {
            const response = await fetch(
                "https://fakestoreapi.com/products"
            );
            const productos = await response.json();
            setProductos(productos);
          }
    }catch(error) {
        console.log(error);
    }
})()
   }, [categoryId])
    
    return (
        <div><h1>{greeting}</h1> 
        <ItemList products={productos}/>
        </div>
    )
}
export default ItemListContainer;