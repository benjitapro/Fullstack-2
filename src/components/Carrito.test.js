
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Catalog from './Catalog.jsx';
import Header from './Header.jsx';
import CarritoModal from './CarritoModal.jsx';
import { CarritoProvider } from './CarritoContext.jsx';

//renderiza la tienda completa
const renderTienda = () => {
  render(
    <CarritoProvider>
      <MemoryRouter>
        <Header />
        <Catalog />
        <CarritoModal />
      </MemoryRouter>
    </CarritoProvider>
  );
};


describe('Componente: Carrito de Compras', () => {

  // agregar al carrito
  it('debe agregar un producto y actualizar el contador del header', async () => {
    renderTienda(); // dibuja la tienda
    // buscamos el botón agregar de la silla Gamer
    const botonAgregar = screen.getByTestId('agregar-sg001');
    // simula el click
    await act(async () => {
      fireEvent.click(botonAgregar);
    });
//busca copntador en header
    const contador = screen.getByTestId('cart-count');
    //verifica que el header se actualizo a 1
    expect(contador.textContent).toBe('1');
  });

  // abrir modal y ver producto
  it('debe mostrar el producto en el modal y el total', async () => {
    renderTienda();
    //Agrega un mouse
    const botonAgregar = screen.getByTestId('agregar-ms001');
    await act(async () => {
      fireEvent.click(botonAgregar);
    });

    // abre el modal
    const botonAbrirModal = screen.getByTestId('nav-link-cart');
    await act(async () => {
      fireEvent.click(botonAbrirModal);
    });

    // verifica que mouse este en modal
    const modal = screen.getByTestId('carrito-modal');
    expect(modal.textContent).toContain('Mouse Logitech G502 HERO');
    
    // verofoca el total sea correctyo
    const total = screen.getByTestId('carrito-total');
    expect(total.textContent).toContain('$49.990');
  });

  // eliminar un producto
  it('debe eliminar un producto del modal', async () => {
    renderTienda();
    // polera
    const botonAgregar = screen.getByTestId('agregar-ts001');
    await act(async () => {
      fireEvent.click(botonAgregar);
    });
    // abre modal
    const botonAbrirModal = screen.getByTestId('nav-link-cart');
    await act(async () => {
      fireEvent.click(botonAbrirModal);
    });
    
    // click en boton eliminar
    const botonEliminar = screen.getByTestId('eliminar-ts001');
    await act(async () => {
      fireEvent.click(botonEliminar);
    });

    // Verifica que ahora este vacio
    const modal = screen.getByTestId('carrito-modal');
    expect(modal.textContent).toContain('Tu carrito está vacío');
  });

});