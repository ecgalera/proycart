   import { useContext, createContext } from "react";
   import {useState} from "react";

   // 1° Creamos la constante para crear el contexto 
   export const CartContext = createContext([]);

   //2° Creamos la función para usar el contexto
   export const useCartContext =()=>{return useContext(CartContext)};

  // Creamos el componente del contexto proveedor 
   const CartProvider =({children})=>{

    const [items, setItems]=useState([])

    
    const agregarProducto =(data)=>{
      if(validarProductoExistente(data.id)){
        alert("El producto ya existe en el carrito")
      }else{
        const listaItems = items;
        listaItems.push(data);
        setItems(listaItems)
      }
    }

    const removeItems=(itemId)=>{
      setItems(items.filter((e)=>e.id !== itemId))
    }
    
    const vaciarCarrito=()=>{
      setItems([])
    }

    const validarProductoExistente=(id)=>{
      if(items.find(e=>e.id === id)){
        return true
      }else{
        return false
      }
    }

    return(
      <CartContext.Provider value={{ items, agregarProducto, vaciarCarrito, removeItems}}>
        {children}
      </CartContext.Provider>    
      )
   }

   export default CartProvider