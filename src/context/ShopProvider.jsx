import React, {useState} from "react";
import { createContext } from "react";

export const Shop = createContext();

const ShopProvider = ({children}) => {
    const [cart, setCart] = useState([])

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
    const removeItem = (product) => {
        const cartRemove = product.cantidad-1
        setCart(cartRemove)
        }
       

    const clearCart = () => {
        //si se le da al boton de cler cart en cart (proxima entrega)
        const cartVacio = cart.empty()
        setCart(cartVacio)
    }

    return (
        <Shop.Provider value={{cart, addItem, removeItem, clearCart}}>
             {children}
        </Shop.Provider>
    )
}

export default ShopProvider;