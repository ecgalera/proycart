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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product' element={<ItemsListContainer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


