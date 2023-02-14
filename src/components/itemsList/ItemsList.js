import React from 'react'
import "../itemsList/ItemsList.css"
import Item from '../item/Item'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

const ItemsList = () => {

  const [product, setProduct]=useState([])

  useEffect(() => {
  
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json.map(product=><Item key={product.id} id={"product"+ product.id} data={product} stock={5}/>)))
  
    
  }, [product])
  

  return (
    <Container className='card-desk md-3 containerproduct'>
     
        {product}
     
    </Container>
  )
}

export default ItemsList