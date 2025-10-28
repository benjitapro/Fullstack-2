// src/components/Home.jsx
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="my-5" data-testid="home-component">

      <section className="banner-principal">
        <div className="banner-content">
          <h2>¡Explora, juega y gana con nosotros!</h2>
          <p>Conviértete en el héroe de tu propia historia y únete a nuestra comunidad de jugadores.</p>
          <Button as={Link} to="/catalog" variant="primary" size="lg">Ver Catálogo</Button>
        </div>
      </section>

      {/* categorias */}
      <h2 className="section-title" style={{marginTop: '2rem'}}>Categorías Destacadas</h2>
      <Container>
        <Row className="text-center mb-4">
          <Col md={4}>
            <Card as={Link} to="/catalog#consoles" className="text-decoration-none">
              <Card.Img variant="top" src="/assets/consoles.png" alt="Consolas" />
              <Card.Body>
                <Card.Title>Consolas</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card as={Link} to="/catalog#accessories" className="text-decoration-none">
              <Card.Img variant="top" src="/assets/perifericos.jpg" alt="Accesorios" />
              <Card.Body>
                <Card.Title>Accesorios</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card as={Link} to="/catalog#pc-gaming" className="text-decoration-none">
              <Card.Img variant="top" src="/assets/pc.png" alt="PC Gamer" />
              <Card.Body>
                <Card.Title>PC Gamers</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </Container>
  );
}
export default Home;