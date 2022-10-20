import React from "react";
import './style.css';
import { useNavigate } from "react-router-dom";
const Item = ({product}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/detail/${product.id}`)
    }
    return (
       <div className= "card" onClick={handleNavigate}>
        <div className="fondo">
       <img className="producto" src={product.image}  alt="producto" />
       </div>
            <h1>{product.title}</h1>
            <h3>{product.description}</h3>
            <h2>${product.price}</h2>
       </div>
    )
}
export default Item