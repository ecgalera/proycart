import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "../cartwiget/CartWiget.css"
import {Link} from "react-router-dom"



const CartWiget = () => {

    
  
    return (
        <div className='cartwiget' >

            <Container>
                <Button >
                <Link to="/cart">
                
                     <img  className='img' src="/image/cart.png" alt="logo" />
               
                </Link>
                
                </Button>
                <span className="spancartwiget">0</span>
                
            </Container>

        </div>
    )
}

export default CartWiget