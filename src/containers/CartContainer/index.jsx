import React from "react";
import { useContext } from "react";
import { Shop } from '../../context/ShopProvider';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import ordenGenerada from "../../services/generarOrden";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import './style.css'


const Cart = () => {
    const {cart, removeItem, clearCart, total, setCart } = useContext(Shop);
    const navigate = useNavigate();
    const seguir = () => {
      navigate('/')
    }
    const renderImage = (image) => {
        return(
          <img src={image.value} alt="cart-product" style={{height: '120px'}}></img>
        )
      }
      const renderRemoveButton = (item) => {
        const product = item.value
        return (
          <Button onClick={()=> removeItem(product)} variant="contained" color="error">
            Remove
          </Button>
        )
      }
      const handleBuy = async (product) => {
        
        const importeTotal = total();
        const orden = ordenGenerada(
            "Nadhir",
            "nadhir99@gotmail.com.ar",
            2615718643,
            cart,
            importeTotal
        );
        console.log(orden);
        const docRef = await addDoc(collection(db, "orders"), orden);
        cart.forEach(async (productoEnCarrito) => {
            const productRef = doc(db, "products", productoEnCarrito.id);
            const productSnap = await getDoc(productRef);
            await updateDoc(productRef, {
                stock: productSnap.data().stock - productoEnCarrito.quantity,
            });
        });
        alert(
            `Gracias por su compra! Se generó la orden generada con ID: ${docRef.id}`
        );
        setCart([])
    };
      const columns = [
        { field: 'image', headerName: 'Vista', width: 250, renderCell: renderImage},
        { field: 'title', headerName: 'Producto', width: 450 },
        { field: 'quantity', headerName: 'Cantidad', width: 80 },
        { field: 'price', headerName: 'Valor unitario', width: 100 },
        { field: 'total', headerName: 'Valor total', width: 100 },
        {
          field: 'remove',
          headerName: 'Eliminar',
          renderCell: renderRemoveButton,
          width: 120,
        },
      ];
    
   
      const filas = []
      cart.forEach(item => {
        filas.push({
          id: item.id,
          image: item.image,
          title: item.title,
          quantity: item.cantidad,
          price: item.price,
          total: item.price * item.cantidad,
          remove: item,
        })
      })
        const flag1 = (cart.length === 0)
        return (
          flag1 ?
          <div className="vacio">
            <h1>Su carro esta vacio</h1>
          <Button className="boton" onClick={seguir} color="info" variant="oulined">Agregar produtos</Button>
          </div>
        :
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={filas}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          rowHeight={150}
        />
        <Button onClick={clearCart} color="error" variant="outlined">Clear cart</Button>
        <Button onClick={seguir} variant="outlined">Seguir comprando</Button>
        <Button onClick={handleBuy} variant="outlined">Confirmar compra</Button>
        </div>
    );} 
       
            
    


      

export default Cart;