import React from 'react';
import {Navbar, Container, Nav, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
import {useCarrito} from './CarritoContext.jsx';

function Header() {
  //obtiene datos
  const { handleShow, totalItems } = useCarrito();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" data-testid="header-component">
      <Container>
        {/*este link siempre llevara al inicio*/}
        <Navbar.Brand as={Link} to="/" data-testid="header-logo">
          <img src="/assets/logo.png" width="30" height="30" className="d-inline-block align-top" alt="Logo Level-Up Gamer" />
          {' '} Level-Up Gamer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" data-testid="nav-link-inicio">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/catalog" data-testid="nav-link-catalogo">Catálogo</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link 
              onClick={handleShow}
              data-testid="nav-link-cart" 
              className="cart-icon"
              style={{cursor: 'pointer'}}
            >
              <i className="fas fa-shopping-cart"></i>
              {totalItems > 0 && (
                <Badge pill bg="danger" data-testid="cart-count" style={{ marginLeft: '5px' }}>
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>
            
            {/*y esto a login*/}
            <Nav.Link 
              as={Link} 
              to="/login"
              data-testid="nav-link-login" 
              className="btn btn-login"
            >
              Login/Registro
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;