import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Button } from 'react-bootstrap';
import ItemsCount from "../../count/ItemsCount"
import { useState } from "react"
import CartProvider from '../../../context/CardContext';
import { useCartContext } from '../../../context/CardContext';
import { Link } from 'react-router-dom';



function ItemDetail(props) {

  const { title, price, image, category, id } = props.data

  const { agregarProducto } = useCartContext(CartProvider)

  const [cantidad, setCantidad] = useState(0)


  const tomarCantidad = (num) => {
    setCantidad(num)
  }

  const onAdd = () => {
    if (cantidad === 0) {
      alert("Agregar Producto")
    }
    const producto = {
      image: image,
      id: id,
      title: title,
      category: category,
      price: price,
      cantidad: cantidad
    }
    agregarProducto(producto)
  }




  return (
    <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price: ${price}</ListGroup.Item>
          <ListGroup.Item>category: {category}</ListGroup.Item>
          <ListGroup.Item>Cantidad {cantidad}</ListGroup.Item>
          {/* <ListGroup.Item>descripction: {description}</ListGroup.Item> */}
          <ListGroup.Item>Stock: {props.stock}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
          <ItemsCount tomarCantidad={tomarCantidad} stock={props.stock} />

          <Container>
            <div>
              <Button className='agregarCarrito' variant="dark" onClick={onAdd}>Agregar al Carrito</Button>
              {cantidad > 0 &&
                <Link to="/cart">
                  <Button>Ir al Carrito</Button>
                </Link>}
            </div>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemDetail;

