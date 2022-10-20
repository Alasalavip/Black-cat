import React, { useContext } from "react";
import './style.css';
import  { Shop } from "../../context/ShopProvider";
import {Link} from 'react-router-dom';
const CartWidget = () => {
const { itemsInCart,cart } = useContext(Shop)

const flag = (cart.length === 0)

    return (
        flag ?
        <h5>no</h5>
        :
        <div >
            <Link className="nav-link derecha" placement="end" to="/cart"><i class="fa-solid fa-cart-shopping"><h5>{itemsInCart}</h5></i></Link>
            
        </div>
    )
}
export default CartWidget