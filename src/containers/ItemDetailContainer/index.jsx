import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";


const ItemDetailContainer = () => {
    const [productDetail, SetProductDetail] = useState({})
    const {productId} = useParams();
    console.log(productId)
 
    useEffect (()=> {
       
        const getProducts = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                
            SetProductDetail(data)
            } catch (error) {
                console.log(error)
            }
            
        }
        getProducts();
    }, [productId])
    console.log(productDetail);
    return (
        <ItemDetail product={productDetail}/>
    )
}

export default ItemDetailContainer