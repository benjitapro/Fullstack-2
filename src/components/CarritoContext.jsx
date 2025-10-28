// src/components/CarritoContext.jsx
import React, { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => {
  return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);  // estado para saber si el modal esta visible

  // funciones para abrir y cerrar el modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Lógica para añadir un item
  const agregarItem = (productoParaAgregar) => { 
    setItems((itemsAnteriores) => {
      //ve si el item existe
      const itemExistente = itemsAnteriores.find((item) => item.id === productoParaAgregar.id);
      if (itemExistente) {
        //si existe actualiza la cantidad
        return itemsAnteriores.map((item) =>
          item.id === productoParaAgregar.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...itemsAnteriores, { ...productoParaAgregar, qty: 1 }];
      }
    });
  };
// eliminar item
  const eliminarItem = (idProductoParaEliminar) => {
    setItems((itemsAnteriores) => {
      return itemsAnteriores.filter((item) => item.id !== idProductoParaEliminar);
    });
  };
// logica para calcular el total
  const getPrecioTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.qty), 0);
  };
//toda la info para que otros componentes lo ocupen
  const value = {
    items,
    agregarItem,
    eliminarItem,
    getPrecioTotal,
    totalItems: items.reduce((total, item) => total + item.qty, 0),
    show,
    handleShow,
    handleClose
  };

  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  );
};