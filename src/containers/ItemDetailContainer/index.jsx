import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {
    const [productDetail, SetProductDetail] = useState({})
    const {productId} = useParams();
    
    console.log(productId)
 
    useEffect (()=> {
       
        const getProducts = async () => {
            try {

                const docRef = doc(db, "products", productId);
                const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            SetProductDetail({id: docSnap.id, ...docSnap.data()} )
            } else {
            console.log("No such document!");
            }
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