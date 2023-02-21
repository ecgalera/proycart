import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../../cart/cartItems/CartItems.css"
import { Button } from 'react-bootstrap';
import { useCartContext } from '../../../context/CardContext';
import CartProvider from '../../../context/CardContext';


function CartItems({image, price, title,id, cantidad}) {

    const {removeItems}=useCartContext(CartProvider)
    
   

  return (

    <CardGroup>
      <Card>
        <Card.Img variant="top" className='imagecart' src={image}/>
        <Card.Body> 
          <Card.Title>{title}</Card.Title>
          <Card.Text>Price: $ {price}</Card.Text>
          <Card.Text>Id:  {id}</Card.Text>
          <Card.Text>Cantidad:  {cantidad}</Card.Text>
         <Button onClick={()=>removeItems(id)}>Eliminar Producto</Button>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
        
      </Card>     
    </CardGroup>
  );
}

export default CartItems;