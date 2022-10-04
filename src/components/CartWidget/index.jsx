import React, { useContext } from "react";
import './style.css';
import ShopProvider, { Shop } from "../../context/ShopProvider";
const CartWidget = () => {
const { itemsInCart,cart } = useContext(Shop)

const flag = (cart.length === 0)
console.log(itemsInCart)
    return (
        flag ?
        <h5>no</h5>
        :
        <div >
            <a class="nav-link derecha" placement="end" href="#"><i class="fa-solid fa-cart-shopping"><h5>{itemsInCart}</h5></i></a>
            
        </div>
    )
}
export default CartWidget