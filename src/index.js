import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar/NavBar"
import ItemsListContainer from './components/itemsListContainer/ItemsListContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <ItemsListContainer/>
  </React.StrictMode>
);


