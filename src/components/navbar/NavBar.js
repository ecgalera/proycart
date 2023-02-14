import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWiget from '../cartwiget/CartWiget';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MyShop</Navbar.Brand>
          <Nav className="me-auto">
          <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none", color:"white"}} to="/">Home</Link></li>
          <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none",color:"white", padding: "10px",}} to="/product">Productos</Link></li>
            <Nav.Link href="#ropamujer">Ropa Mujer</Nav.Link>
            <Nav.Link href="#ropahombre">Ropa Hombre</Nav.Link>
            <Nav.Link href="#electronicos">Electronicos</Nav.Link>
            <Nav.Link href="#joyeria">Joyeria</Nav.Link>
            <Nav.Link href="#pricing">Contactenos</Nav.Link>
            <CartWiget/>
          </Nav>
        </Container>
      </Navbar>
      <br />
     
    </>
  );
}

export default ColorSchemesExample;