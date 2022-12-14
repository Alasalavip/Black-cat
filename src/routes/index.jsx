import React from "react";
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from '../components/NotFound';
import Cart from '../containers/CartContainer';

const Rutas =() => {
    return (
        <Router>
        <NavBar condition={false}/>
        <Routes>
       <Route path='/' element={<ItemListContainer/>}/>
       <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
       <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='*' element={<NotFound/>}/>
         </Routes>
        </Router>
    )
}
export default Rutas;