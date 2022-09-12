import React from "react";
import './style.css';

const ItemDetail = ({product}) => {
    return(
        <div class="product">
            <img class="producto" src={product.image} width={250}  alt="producto" />
            <h1>{product.title}</h1>
            <h3>{product.description}</h3>
            <h2>${product.price}</h2>
            
        </div>
    )
}

export default ItemDetail