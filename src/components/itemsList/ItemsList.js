import React from 'react'
import "../itemsList/ItemsList.css"
import Item from '../item/Item'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ItemsList = () => {

  const [product, setProduct] = useState([])
 
  const {categoryId} = useParams()
 
   useEffect(() => {
 
     if(categoryId!= null){
 
       fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
   .then(res => res.json())
   .then(json => setProduct(json.map(product => <Item key={product.id} id={"product" + product.id} data={product} stock={5}/>)))
 
     }else{
 
     fetch('https://fakestoreapi.com/products')
       .then(res => res.json())
       .then(json => setProduct(json.map(product => <Item key={product.id} id={"product" + product.id} data={product} stock={5}/>)))
 
     }
 
   },[categoryId])


  return (
    <Container className='card-desk md-3 containerproduct'>

      {product}

    </Container>
  )
}

export default ItemsList