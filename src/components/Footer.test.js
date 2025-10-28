
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer.jsx';

describe('Componente: Footer', () => {
// verifica que el copyright se muestre con el año correcto
  it('debe renderizar el copyright con el año actual', () => {
    render(<Footer />);
    const copyrightText = screen.getByTestId('footer-copyright');
    // verifica que contenga el año 
    const currentYear = new Date().getFullYear();
    expect(copyrightText.textContent).toContain(String(currentYear));
  });

// verifica que contacto existe por data-testid
  it('debe renderizar el enlace de Contacto', () => {
    render(<Footer />);
    const contactLink = screen.getByTestId('footer-link-contacto');
    expect(contactLink.textContent).toBe('Contacto');
  });

  //verifica el icono de face
  it('debe renderizar el ícono de Facebook', () => {
    render(<Footer />);
    // Verificamos que el ícono (identificado por 'social-fb') exista
    expect(screen.getByTestId('social-fb')).toBeTruthy();
  });

});