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
        <Outlet /> {/* pagina actual*/}
      </main>
      <Footer />
      {/* oculto hasta que header lo llama */}
      <CarritoModal />
    </div>
  );
}

export default App;