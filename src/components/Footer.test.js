import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer.jsx';

describe('Componente: Footer', () => {
  const renderFooter = () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  };

  it('debe renderizar el copyright con el año actual', () => {
    renderFooter();
    const node = screen.getByTestId('footer-copyright');
    const currentYear = new Date().getFullYear();
    expect(node.textContent).toContain(String(currentYear));
  });

  it('debe renderizar el enlace de Contacto', () => {
    renderFooter();
    const contactLink = screen.getByTestId('footer-link-contacto');
    expect(contactLink.textContent).toBe('Contacto');
  });

  it('debe renderizar el ícono de Facebook', () => {
    renderFooter();
    expect(screen.getByTestId('social-fb')).toBeTruthy();
  });
});

