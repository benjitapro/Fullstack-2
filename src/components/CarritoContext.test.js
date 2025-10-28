import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { CarritoProvider, useCarrito } from './CarritoContext.jsx';

function TestComponent() {
  const { items, agregarItem, eliminarItem, getPrecioTotal, totalItems, show, handleShow, handleClose } = useCarrito();
  return (
    <div>
      <span data-testid="total-items">{totalItems}</span>
      <span data-testid="total-price">{getPrecioTotal()}</span>
      <span data-testid="show-state">{show ? 'true' : 'false'}</span>

      <button data-testid="btn-add" onClick={() => agregarItem({ id: 1, name: 'Test', price: 100 })}>Agregar</button>
      <button data-testid="btn-add-2" onClick={() => agregarItem({ id: 2, name: 'Otro', price: 50 })}>Agregar2</button>
      <button data-testid="btn-delete" onClick={() => eliminarItem(1)}>Eliminar</button>
      <button data-testid="btn-show" onClick={handleShow}>Show</button>
      <button data-testid="btn-close" onClick={handleClose}>Close</button>
    </div>
  );
}

describe('CarritoContext', () => {
  beforeEach(() => {
    render(
      <CarritoProvider>
        <TestComponent />
      </CarritoProvider>
    );
  });

  it('inicializa vacío', () => {
    expect(screen.getByTestId('total-items').textContent).toBe('0');
    expect(screen.getByTestId('total-price').textContent).toBe('0');
    expect(screen.getByTestId('show-state').textContent).toBe('false');
  });

  it('agrega y calcula total correctamente', () => {
    act(() => {
      fireEvent.click(screen.getByTestId('btn-add'));
    });
    expect(screen.getByTestId('total-items').textContent).toBe('1');
    expect(screen.getByTestId('total-price').textContent).toBe('100');

    act(() => {
      fireEvent.click(screen.getByTestId('btn-add'));
    });
    expect(screen.getByTestId('total-items').textContent).toBe('2');
    expect(screen.getByTestId('total-price').textContent).toBe('200');
  });

  it('agrega distintos productos y suma total', () => {
    act(() => {
      fireEvent.click(screen.getByTestId('btn-add'));
      fireEvent.click(screen.getByTestId('btn-add-2'));
    });
    expect(screen.getByTestId('total-items').textContent).toBe('2');
    expect(screen.getByTestId('total-price').textContent).toBe('150');
  });

  it('elimina producto correctamente', () => {
    act(() => {
      fireEvent.click(screen.getByTestId('btn-add'));
      fireEvent.click(screen.getByTestId('btn-delete'));
    });
    expect(screen.getByTestId('total-items').textContent).toBe('0');
    expect(screen.getByTestId('total-price').textContent).toBe('0');
  });

  it('handleShow y handleClose actualizan show', () => {
    act(() => {
      fireEvent.click(screen.getByTestId('btn-show'));
    });
    expect(screen.getByTestId('show-state').textContent).toBe('true');

    act(() => {
      fireEvent.click(screen.getByTestId('btn-close'));
    });
    expect(screen.getByTestId('show-state').textContent).toBe('false');
  });
});