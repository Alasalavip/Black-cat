import React, {useState} from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const Shop = createContext();

const ShopProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const navigate = useNavigate
    let itemsInCart = 0; 
    cart.map((product) => {
    itemsInCart = itemsInCart + product.cantidad;
    return itemsInCart;
 })
 
    const addItem = (item) => {
        const flag = isInCart(item.id);
        console.log(flag)
        if (flag) {
            const cartModified = cart.map(product => {
                if(product.id === item.id) {
                    product.cantidad += item.cantidad
                    return product
                }
                return product
            })
            setCart(cartModified)
        } else {
            const cartModificado = [...cart, item]
            setCart(cartModificado)  
        }
    
    }
    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }
    const removeItem = (itemToRemove) => {
        const cartRemove = cart.filter(item => item !== itemToRemove);
        setCart(cartRemove)
        }
       

    const clearCart = () => {
        setCart([])
        
    }
    const seguir = () => {
        navigate('/')
      }
      const total = (acc,product) =>{
        const total = cart.reduce((acc, product), acc += product.cantidad * product.price, 0)
        console.log(total);
        return total;
      }

    return (
        <Shop.Provider value={{cart,itemsInCart ,addItem, seguir, removeItem, clearCart, total}}>
             {children}
        </Shop.Provider>
    )
}

export default ShopProvider;