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
          <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none",color:"white", padding: "15px",}} to={"/product"}>Productos</Link></li>
          <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none",color:"white", padding: "15px"}} to={'/categoria/jewelery'}>Joyeria</Link></li>
          <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none",color:"white", padding: "15px"}}to={'/categoria/electronics'}>Electronica</Link></li>
          <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none",color:"white", padding: "15px"}}to={"/categoria/men's clothing"}>Ropa de Hombre</Link></li>
          <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none",color:"white", padding: "15px"}}to={"/categoria/women's clothing"}>Ropa de Mujer</Link></li>
          <li><CartWiget/></li>
          </Nav>
        </Container>
      </Navbar>
      <br />
     
    </>
  );
}

export default ColorSchemesExample;