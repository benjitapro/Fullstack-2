// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; 

// herramientas del mapa (router)
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// el cerebro
import { CarritoProvider } from './components/CarritoContext.jsx'; 

import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Catalog from './components/Catalog.jsx';
import Contact from './components/Contact.jsx';

// mapa del sitio
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [       // las paginas
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "catalog", element: <Catalog /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarritoProvider>
      <RouterProvider router={router} />
    </CarritoProvider>
  </React.StrictMode>,
);
