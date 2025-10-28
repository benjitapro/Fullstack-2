// src/components/Contact.jsx
import React, { useState } from "react";
import { Container } from "react-bootstrap";

function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState({});
  const [estado, setEstado] = useState("");

  const validate = (values) => {
    const e = {};
    if (!values.nombre.trim()) e.nombre = "El nombre es obligatorio.";
    if (!values.email.trim()) {
      e.email = "El email es obligatorio.";
    } else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(values.email)) e.email = "Ingresa un email válido.";
    }
    if (!values.mensaje.trim()) {
      e.mensaje = "El mensaje es obligatorio.";
    } else if (values.mensaje.trim().length < 10) {
      e.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }
    return e;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) {
      setEstado("Por favor corrige los campos marcados.");
      return;
    }
    // Aquí podrías enviar a una API (fetch/axios)
    setEstado("¡Mensaje enviado! Te contactaremos pronto.");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  const handleReset = () => {
    setForm({ nombre: "", email: "", mensaje: "" });
    setErrors({});
    setEstado("");
  };

  return (
    <Container className="my-5" data-testid="contact-component">
      <section>
        <h2>Formulario de contacto</h2>

        <form id="contactForm" noValidate onSubmit={handleSubmit} onReset={handleReset}>
          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={form.nombre}
              onChange={handleChange}
              aria-invalid={!!errors.nombre}
              aria-describedby="err-nombre"
            />
            <small className="error" id="err-nombre" data-for="nombre">
              {errors.nombre || ""}
            </small>
          </div>

          <div className="campo">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby="err-email"
            />
            <small className="error" id="err-email" data-for="email">
              {errors.email || ""}
            </small>
          </div>

          <div className="campo">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              required
              minLength={10}
              value={form.mensaje}
              onChange={handleChange}
              aria-invalid={!!errors.mensaje}
              aria-describedby="err-mensaje"
            />
            <small className="error" id="err-mensaje" data-for="mensaje">
              {errors.mensaje || ""}
            </small>
          </div>

          <div className="acciones">
            <button type="submit" className="btn">Enviar</button>
            <button type="reset" className="btn btn-sec">Limpiar</button>
          </div>

          <p id="estadoEnvio" className="estado" aria-live="polite">
            {estado}
          </p>
        </form>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Soporte técnico</h2>
        <p>¿Necesitas ayuda? Escríbenos directamente a nuestro WhatsApp.</p>
        <a
          href="https://wa.me/56911111111"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Ir a WhatsApp
        </a>
      </section>
    </Container>
  );
}

export default Contact;

