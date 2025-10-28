// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    // Usamos las clases de Bootstrap para el estilo
    <footer className="bg-dark text-white text-center p-4 mt-5" data-testid="footer-component">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            {/* usamos data-testid para el test */}
            <p data-testid="footer-copyright" className="mb-0">
              &copy; {currentYear} Level-Up Gamer. Todos los derechos reservados.
            </p>
          </Col>

          {/* links*/}
          <Col md={4} className="mb-3 mb-md-0">
            <Nav className="justify-content-center">
              <Nav.Link as={Link} to="/" className="text-white" data-testid="footer-link-inicio">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white" data-testid="footer-link-nosotros">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white" data-testid="footer-link-contacto">Contacto</Nav.Link>
            </Nav>
          </Col>

          {/* rs*/}
          <Col md={4}>
            <a href="https://www.facebook.com" className="text-white me-3" data-testid="social-fb">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" className="text-white me-3" data-testid="social-ig">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com" className="text-white" data-testid="social-x">
              <i className="fab fa-twitter"></i> {/* (Tu HTML usaba 'x.svg', pero FontAwesome es más fácil) */}
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
