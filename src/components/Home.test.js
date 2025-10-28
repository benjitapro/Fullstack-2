import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home.jsx';


describe('Componente: Home', () => {
  const renderHome = () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  };

  it('debe renderizar el banner principal', () => {
    renderHome();
    const banner = screen.getByText('¡Explora, juega y gana con nosotros!');
    expect(banner).toBeTruthy();
  });

  it('debe mostrar las tres categorías principales', () => {
    renderHome();
    expect(screen.getByText('Consolas')).toBeTruthy();
    expect(screen.getByText('Accesorios')).toBeTruthy();
    expect(screen.getByText('PC Gamers')).toBeTruthy();
  });

  it('debe tener un botón funcional para ver el catálogo', () => {
    renderHome();
    const catalogButton = screen.getByText('Ver Catálogo');
    expect(catalogButton).toBeTruthy();
    const anchor = catalogButton.closest('a');
    expect(anchor && anchor.getAttribute('href')).toBe('/catalog');
  });

  it('debe cargar todas las imágenes de categorías', () => {
    renderHome();
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(3); // Tres imágenes de categorías

    const altTexts = images.map(img => img.alt);
    expect(altTexts).toContain('Consolas');
    expect(altTexts).toContain('Accesorios');
    expect(altTexts).toContain('PC Gamer');
  });

  it('debe tener enlaces funcionales en las tarjetas de categorías', () => {
    renderHome();
    const categoryLinks = screen.getAllByRole('link');

    //la app actualmente expone las 3 categorías
    expect(categoryLinks.length).toBe(3);

    //confirmar hrefs manualmente
    expect(categoryLinks[0].getAttribute('href')).toBe('/catalog#consoles');
    expect(categoryLinks[1].getAttribute('href')).toBe('/catalog#accessories');
    expect(categoryLinks[2].getAttribute('href')).toBe('/catalog#pc-gaming');
  });
});
