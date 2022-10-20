import React, {useState} from "react";
import { useContext } from "react";

import { Shop } from "../../context/ShopProvider";
import ItemCount from "../ItemCount";
import Modal from "../Modal/modal";
import './style.css';

const ItemDetail = ({product}) => {
    const [qty, setQty] = useState(0);
   
    const {addItem} = useContext(Shop);
  
    const agregarAlCarrito = (cantidad) => {
        setQty(cantidad);
      };
      const [openModal, setOpenModal] = useState(false);
      const abrir = () =>{
        setOpenModal(true)
      }
      const handleFinish = () => {
        const productToSave = {...product, cantidad: qty}
        addItem(productToSave)
        abrir();
      }
    
      
    return(
        <div className="product">
            <img className="producto" src={product.image} width={250}  alt="producto" />
            <h1>{product.title}</h1>
            <h3>{product.description}</h3>
            <h2>${product.price}</h2>
            { !qty ? (<ItemCount stock={product.stock} initial={1} onAdd={agregarAlCarrito}className="contador"/>) :(  <button className="finalizar" onClick={handleFinish}>Finalizar la compra</button> )}
            {openModal && <Modal cerrar={setOpenModal}/>}
        </div>
    )
}

export default ItemDetail