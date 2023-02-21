import CartProvider from './context/CardContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar/NavBar"
import ItemsListContainer from './components/itemsListContainer/ItemsListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home"
import ItemsList from './components/itemsList/ItemsList';
import ItemsDetailContainer from "./components/itemdetail/itemsdetailcontainer/ItemsDetailContainer";
import CartItemsContainer from './components/cart/cartItemsContainer/CartItemsContainer';
import FinalizarCompra from './components/finalizarCompra/FinalizarCompra';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product' element={<ItemsListContainer />} />
        <Route exact path='/categoria/:categoryId' element={<ItemsList />} />
        <Route exact path='/product/:productoId' element={<ItemsDetailContainer/>}/>
        <Route exact path='/cart' element={<CartItemsContainer/>}/>
        <Route exact path="/finalizarCompra" element={<FinalizarCompra/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);


