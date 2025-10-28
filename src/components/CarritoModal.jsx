// src/components/CarritoModal.jsx
import React from 'react';
import { Modal, Button, ListGroup, Image } from 'react-bootstrap';
import { useCarrito } from './CarritoContext.jsx'; 

function CarritoModal() {
  const { items, eliminarItem, getPrecioTotal, show, handleClose } = useCarrito();
  const totalFormateado = `$${getPrecioTotal().toLocaleString('es-CL')} CLP`;

  return (
    // Usamos las clases de CSS para el tema oscuro
    <Modal show={show} onHide={handleClose} data-testid="carrito-modal" centered className="custom-modal-dark" backdrop={false}>
      <Modal.Header closeButton className="modal-header-dark">
        <Modal.Title className="text-white">Mi Carrito</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="modal-body-dark">
        {items.length === 0 ? (
          <p className="text-white">Tu carrito está vacío.</p>
        ) : (
          <ListGroup variant="flush">
            {items.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center bg-dark text-white border-secondary" data-testid={`item-${item.id}`}>
                
                <div className="d-flex align-items-center">
                  <Image src={item.img} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'contain', marginRight: '10px' }} />
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    <small>{item.qty} x ${item.price.toLocaleString('es-CL')}</small>
                  </div>
                </div>
                
                
                <Button 
                  variant="danger" 
                  size="sm" 
                  onClick={() => eliminarItem(item.id)}
                  data-testid={`eliminar-${item.id}`}
                  aria-label={`Eliminar ${item.name}`}
                  className="btn-eliminar-item"
                >
                  &times; 
                </Button>

              </ListGroup.Item>
            ))}
          </ListGroup>
        )} 
      </Modal.Body>
      
      <Modal.Footer className="modal-footer-dark">
        <div className="w-100 d-flex justify-content-between">
          <strong className="text-white" style={{ fontSize: '1.25rem' }}>Total:</strong>
          <strong className="text-white" style={{ fontSize: '1.25rem' }} data-testid="carrito-total">
            {totalFormateado}
          </strong>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default CarritoModal;