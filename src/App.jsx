// src/App.jsx
import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';
import CarritoModal from './components/CarritoModal.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* Modal del carrito (controlado desde Header) */}
      <CarritoModal />
    </div>
  );
}

export default App;

