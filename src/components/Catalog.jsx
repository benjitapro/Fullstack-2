import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { useCarrito } from './CarritoContext.jsx';

const productos = [
  {
    id: 'ms001',
    name: 'Mouse Logitech G502 HERO',
    price: 49990,
    img: '/assets/mouse.webp',
    description: 'Mouse gaming de alto rendimiento con sensor HERO y pesas ajustables.'
  },
  {
    id: 'sg001',
    name: 'Silla Gamer Pro SG001',
    price: 159990,
    img: '/assets/sillasecretlab.png',
    description: 'Silla ergonómica con soporte lumbar y reposabrazos ajustables.'
  },
  {
    id: 'ts001',
    name: 'Polera Level-Up TS001',
    price: 19990,
    img: '/assets/poleranegra.png',
    description: 'Polera oficial Level-Up, algodón premium.'
  },
  {
    id: 'jm002',
    name: 'Carcassonne',
    price: 24990,
    img: '/assets/carcassone.png',
    description: 'Juego de mesa de estrategia donde construyes un paisaje medieval con losetas.'
  },
  {
    id: 'ac001',
    name: 'Controlador Xbox Series X',
    price: 59990,
    img: '/assets/controlxbox.png',
    description: 'Controlador inalámbrico con diseño ergonómico y gatillos texturizados para mayor precisión.'
  },
  {
    id: 'mp001',
    name: 'Mousepad HyperX FuryS PRO',
    price: 24990,
    img: '/assets/mousepad.png',
    description: 'Superficie microtejida de alta precisión para deslizamiento uniforme y control consistente.'
  },
  {
    id: 'pc001',
    name: 'PC Gamer ASUS ROG Strix',
    price: 999990,
    img: '/assets/pc.png',
    description: 'Equipo potente con componentes de última generación para rendimiento excepcional en juegos.'
  },
  {
    id: 'ps001',
    name: 'PlayStation 5',
    price: 549990,
    img: '/assets/ps5console.png',
    description: 'Consola de nueva generación con gráficos impresionantes y tiempos de carga ultrarrápidos.'
  },
  {
    id: 'au001',
    name: 'Auriculares HyperX Cloud II',
    price: 79990,
    img: '/assets/audifonos.png',
    description: 'Micrófono con cancelación de ruido y almohadillas de espuma viscoelástica para largas sesiones.'
  }
];

function Catalog() {
  const { agregarItem } = useCarrito();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowDetails = (producto) => {
    setSelectedProduct(producto);
    setShowDetails(true);
  };

  return (
    <Container className="my-5" data-testid="catalog-component">
      <h1 className="section-title">Nuestro Catálogo</h1>
      <p>Encuentra lo mejor en productos para gamers, desde consolas hasta accesorios y sillas especializadas.</p>      
      <Row>
        {productos.map((producto) => (
          <Col md={4} className="mb-4" key={producto.id}>
            <Card data-testid={`producto-${producto.id}`}>
              <Card.Img 
                variant="top" 
                src={producto.img} 
                alt={producto.name} 
                style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
              />
              <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text className="description" style={{ minHeight: '60px' }}>
                  {producto.description}
                </Card.Text>
                <Card.Text className="price" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  ${producto.price.toLocaleString('es-CL')} CLP
                </Card.Text>
                
                <Button 
                  variant="info" 
                  className="me-2"
                  onClick={() => handleShowDetails(producto)}
                >
                  Ver Detalles
                </Button>
                
                <Button 
                  variant="success" 
                  onClick={() => agregarItem(producto)}
                  data-testid={`agregar-${producto.id}`}
                >
                  Agregar al Carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showDetails} onHide={() => setShowDetails(false)}>
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img 
                src={selectedProduct.img} 
                className="img-fluid mb-3" 
                alt={selectedProduct.name}
                style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }}
              />
              <p><strong>ID:</strong> {selectedProduct.id}</p>
              <p><strong>Precio:</strong> ${selectedProduct.price.toLocaleString('es-CL')} CLP</p>
              <p><strong>Descripción:</strong> {selectedProduct.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowDetails(false)}>
                Cerrar
              </Button>
              <Button 
                variant="success" 
                onClick={() => {
                  agregarItem(selectedProduct);
                  setShowDetails(false);
                }}
              >
                Agregar al Carrito
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
}

export default Catalog;