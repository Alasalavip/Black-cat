import React from "react";
import { useContext } from "react";
import { Shop } from '../../context/ShopProvider';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const Cart = () => {
    const {cart, removeItem, clearCart, seguir} = useContext(Shop);
 
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
     
      if (filas !== 0){
        return (
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={filas}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          rowHeight={'150px'}
        />
        <Button onClick={clearCart} color="error" variant="outlined">Clear cart</Button>
        </div>
    );} 
            else {
        return (
        <Button onClick={seguir} color="error" variant="outlined">Seguir comprando</Button>
        )
            }
    

}
      

export default Cart;