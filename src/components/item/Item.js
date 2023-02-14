import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import ItemsCount from '../count/ItemsCount';


function Item(props) {

  const {title, price, category, image} = props.data


  return (

<Container>
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='card-text text-warning'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>Category : {category}</Card.Text>
        <Card.Title>Price:${price}</Card.Title>
        <Card.Title>Stock: {props.Containerstock}</Card.Title>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
      <ItemsCount stock={props.stock}/>
    </Card>
   
</Container>
  );
}

export default Item;