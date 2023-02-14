import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import ItemsCount from '../count/ItemsCount';


function Item() {



  return (

<Container>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Producto</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Title>Price</Card.Title>
        <Card.Title>Stock</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <ItemsCount stock={10}/>
    </Card>
   
</Container>
  );
}

export default Item;