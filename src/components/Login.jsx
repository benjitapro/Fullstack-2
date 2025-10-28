// src/components/Login.jsx
import React, {useState} from 'react';
import {Container, Row, Col, Form, Button, Alert} from 'react-bootstrap';

function Login() {
  // ESTADO PARA EL LOGIN
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  
  // ESTADO PARA EL REGISTRO
  const [regEmail, setRegEmail] = useState('');
  const [regUser, setRegUser] = useState('');
  const [regPass, setRegPass] = useState('');
  const [regDate, setRegDate] = useState('');

  // ESTADO PARA LOS MENSAJE
  const [message, setMessage] = useState(null);

  // logica del login
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage(null); // limpia mensajes anteriores

    if (loginEmail === 'admin@test.com' && loginPass === '1234') {
      setMessage({ type: 'success', text: '¡Inicio de sesión exitoso!' });
      window.alert('¡Login exitoso! (simulado)'); // Para el MOCK
    } else if (!loginEmail || !loginPass) {
       setMessage({ type: 'danger', text: 'Error: Email y contraseña son obligatorios.' });
    } else {
      setMessage({ type: 'danger', text: 'Error: Email o contraseña incorrectos.' });
    }
  };

  // LÓGICA PARA EL REGISTRO 
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage(null); // limpia mensajes anteriores

    // Validación simple
    if (!regEmail || !regUser || !regPass || !regDate) {
      setMessage({ type: 'danger', text: 'Error: Todos los campos de registro son obligatorios.' });
      return;
    }
    setMessage({ type: 'success', text: `¡Usuario ${regUser} registrado con éxito!` });
  };

  return (
    <Container className="my-5" data-testid="login-component">
      <Row className="justify-content-center">

        {/*alerta de mensaje*/}
        {message && (
          <Col md={12} className="mb-3">
            <Alert variant={message.type} data-testid="message-alert">
              {message.text}
            </Alert>
          </Col>
        )}
        
        {/* registro*/}
        <Col md={6} className="mb-4">
          <h2 className="text-white" data-testid="register-title">Registro de Usuario</h2>
          <Form data-testid="register-form" onSubmit={handleRegister}>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" 
                value={regEmail} 
                onChange={(e) => setRegEmail(e.target.value)}
                data-testid="reg-email-input" />
              <Form.Text className="text-white-50">
                (Si tu correo es de Duoc, obtendrás un 20% de descuento).
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Usuario</Form.Label>
              <Form.Control type="text" placeholder="Elige un nombre de usuario" 
                value={regUser} 
                onChange={(e) => setRegUser(e.target.value)}
                data-testid="reg-user-input" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" 
                value={regPass} 
                onChange={(e) => setRegPass(e.target.value)}
                data-testid="reg-password-input" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Fecha de Nacimiento</Form.Label>
              <Form.Control type="date" 
                value={regDate} 
                onChange={(e) => setRegDate(e.target.value)}
                data-testid="reg-dob-input" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Registrarse
            </Button>
          </Form>
        </Col>

        {/*login funcional*/}
        <Col md={6}>
          <h2 className="text-white" data-testid="login-title">Inicio de Sesión</h2>
          <Form data-testid="login-form" onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" 
                value={loginEmail} 
                onChange={(e) => setLoginEmail(e.target.value)} 
                data-testid="login-email-input" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" 
                value={loginPass} 
                onChange={(e) => setLoginPass(e.target.value)} 
                data-testid="login-password-input" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Ingresar
            </Button>
          </Form>
        </Col>

      </Row>
    </Container>
  );
}
export default Login;