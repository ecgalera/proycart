import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import "../count/ItemsCount.css"




const ItemsCount = ({ stock, tomarCantidad }) => {

    const [count, setCount] = useState(0)

    const onAdd = () => {
        if (count < stock){ 
            setCount(count + 1)}
            tomarCantidad(count + 1)
    }

    const disOne = () => {
        if (count > 0){
            setCount(count - 1)}
            tomarCantidad(count)
    }

    return (
        <div>
            <Container className='container'>
                <div>
                    <Button className='button' variant="dark" onClick={onAdd} >+</Button>
                </div>
                <span>{count}</span>
                <div>
                    <Button className='button' variant="dark" onClick={disOne}>-</Button>
                </div>

            </Container>
            
        </div>

    )
}

export default ItemsCount