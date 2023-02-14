import React from 'react'
import { Container } from 'react-bootstrap'
import "../cartwiget/CartWiget.css"



const CartWiget = () => {
    return (
        <div className='cartwiget' >
            <Container>
                <img  className='img' src="image/cart.png" alt="logo" /><span className="span">0</span>
            </Container>

        </div>
    )
}

export default CartWiget