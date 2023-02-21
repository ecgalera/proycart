
import React from 'react'
import CartItems from '../cartItems/CartItems'
import { useCartContext } from "../../../context/CardContext"
import CartProvider from '../../../context/CardContext'
import { Button, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const CartItemsContainer = () => {

  const { items, vaciarCarrito } = useCartContext(CartProvider)

  const [totalComprado, setTotalComprado] = useState(0)

  useEffect(() => {
    const compra = items.reduce((acumulador, valorActual) => {
      return acumulador + (valorActual.price * valorActual.cantidad)
    }, 0)
    setTotalComprado(compra)
  }, [totalComprado, items])

  return (
    <div>
      <Container>
        {items.map(e => { return <CartItems price={e.price} title={e.title} image={e.image} id={e.id} cantidad={e.cantidad} /> }, 0)}
        {totalComprado > 0 && <Link to="/finalizarCompra"><Button variant="success">Finalizar Compra</Button></Link>}
      </Container>
      <Container>
        {totalComprado >0 && <p>Compra total: $ {totalComprado} </p>}
      </Container>
      {totalComprado > 0 && <Container><Button variant="danger" onClick={vaciarCarrito}>Vaciar Carrito</Button></Container>}

    </div>
  )
}

export default CartItemsContainer
