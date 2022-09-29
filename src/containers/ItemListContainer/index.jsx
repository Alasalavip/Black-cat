import React from "react";
import { useState } from "react";
//import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";
import './style.css';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {db} from "../../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

console.log(db)
const ItemListContainer = ({greeting}) => {
   const [productos, setProductos] = useState([]) 
   const {categoryId} = useParams();
   console.log(categoryId)
   useEffect(()=> {
(async ()=> {
    
    try {
    
       
            const q = categoryId ?
             query(collection(db, "products"), where("category", "==", categoryId ))
             :
             query(collection(db, "products"));

    const querySnapshot = await getDocs(q);
    const productosFirebase = [];
    querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
  productosFirebase.push({id: doc.id, ...doc.data()})
});
    setProductos(productosFirebase)
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