import React, {useState} from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import ItemCount from "../ItemCount";
import './style.css';

const ItemDetail = ({product}) => {
    const [qty, setQty] = useState(0);
    const navigate = useNavigate(); 
    const {addItem} = useContext(Shop);
    const seguir = () => {
      navigate('/')
    }
    const agregarAlCarrito = (cantidad) => {
        setQty(cantidad);
      };
      const handleFinish = () => {
        const productToSave = {...product, cantidad: qty}
        addItem(productToSave)
        navigate('/cart')
      }
      //const handleseguir = () => {
        //navigate('/')
      //}
      console.log(qty);
    return(
        <div class="product">
            <img class="producto" src={product.image} width={250}  alt="producto" />
            <h1>{product.title}</h1>
            <h3>{product.description}</h3>
            <h2>${product.price}</h2>
            { !qty ? (<ItemCount stock={product.stock} initial={1} onAdd={agregarAlCarrito}class="contador"/>) :(  <button class="finalizar" onClick={handleFinish}>Finalizar la compra</button> )}
        </div>
    )
}

export default ItemDetail