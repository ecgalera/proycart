import React from 'react';
import ReactDOM from 'react-dom/client';
import ItemsCount from './components/count/ItemsCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWiget from './components/cartwiget/CartWiget';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemsCount stock={10} />
    <CartWiget/>
  </React.StrictMode>
);


