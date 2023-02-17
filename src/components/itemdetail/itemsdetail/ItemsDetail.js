import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

function ItemDetail(props) {

  const {title, price, image, description, category}=props.data
 
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
        <ListGroup.Item>descripction: {description}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
</Container>
  );
}

export default ItemDetail;

