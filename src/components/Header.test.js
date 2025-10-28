
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CarritoProvider } from './CarritoContext.jsx';
import Header from './Header.jsx';

describe('Componente: Header', () => {
  const renderHeader = () => {
    render(
      //header  en el cerebro
      <CarritoProvider>
        {/* header en el mapa */}
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </CarritoProvider>
    );
  };

// verifica el logo 
  it('debe renderizar el logo con el nombre correcto', () => {
    renderHeader(); // función ayudante para dibujarlo
    //busca el logo
    const logo = screen.getByTestId('header-logo');
    //verifica que el texto contenga el nombre
    expect(logo.textContent).toContain('Level-Up Gamer');
  });

// link de login si existe
  it('debe renderizar el enlace de Login/Registro', () => {
    renderHeader(); 
    const loginLink = screen.getByTestId('nav-link-login');
    expect(loginLink.textContent).toBe('Login/Registro');
  });

  // verifica que el link de catalogo exista
  it('debe renderizar el enlace de Catálogo', () => {
    renderHeader(); // <-- Usamos la nueva función
    const catalogoLink = screen.getByTestId('nav-link-catalogo');
    expect(catalogoLink.textContent).toBe('Catálogo');
  });

});