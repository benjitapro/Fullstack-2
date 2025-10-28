
import React from 'react';
import {render, fireEvent, screen, act} from '@testing-library/react';
import Login from './Login.jsx';


describe('Componente: Login', () => {
  //primer test
  it('debe renderizar los títulos de Registro y Login', () => {
    render(<Login />);
    expect(screen.getByTestId('register-title').textContent).toBe('Registro de Usuario');
    expect(screen.getByTestId('login-title').textContent).toBe('Inicio de Sesión');
  });
  // test 2 verifica que si el user escribe en la casilla, react se actualiza
  it('debe actualizar el valor del email de registro al escribir', () => {
    render(<Login />);
    
    const emailInput = screen.getByTestId('reg-email-input');//busca casilla de email
    fireEvent.change(emailInput, { target: { value: 'test@duoc.cl' } });//simula un cambio
    expect(emailInput.value).toBe('test@duoc.cl');//verifica que value de la casilla sea lo que escribimos 
  });
  //test 3
  it('debe mostrar error si el login es incorrecto', async () => {
    render(<Login />);
    fireEvent.change(screen.getByTestId('login-email-input'), { target: { value: 'mal@usuario.com' } });
    fireEvent.change(screen.getByTestId('login-password-input'), { target: { value: '123' } });

    const loginForm = screen.getByTestId('login-form');
    await act(async () => {
      fireEvent.submit(loginForm);
    });
    
    const alert = screen.getByTestId('message-alert');
    expect(alert.textContent).toBe('Error: Email o contraseña incorrectos.');
  });

  //test 4
  it('debe mostrar error si los campos de registro están vacíos', async () => {
    render(<Login />);
    const regForm = screen.getByTestId('register-form');
    await act(async () => {
      fireEvent.submit(regForm);
    });
    
    const alert = screen.getByTestId('message-alert');
    expect(alert.textContent).toBe('Error: Todos los campos de registro son obligatorios.');
  });

  //mock
  it('debe llamar a window.alert y mostrar éxito si el login es correcto', async () => {
    //el espia la funcion alert de window. reemplaza la funcion alert  real con una falsa que registra si fue llamada
    const mockAlert = spyOn(window, 'alert');

    render(<Login />);

    // user ingresando datos correctos
    fireEvent.change(screen.getByTestId('login-email-input'), { target: { value: 'admin@test.com' } });
    fireEvent.change(screen.getByTestId('login-password-input'), { target: { value: '1234' } });
    const loginForm = screen.getByTestId('login-form');
    await act(async () => {
      fireEvent.submit(loginForm);
    });
    // se esoera que el espia haya sido llamado con el texto exacto
    expect(mockAlert).toHaveBeenCalledWith('¡Login exitoso! (simulado)');
    const alertMsg = screen.getByTestId('message-alert');
    expect(alertMsg.textContent).toBe('¡Inicio de sesión exitoso!');
  });


  it('registro exitoso muestra mensaje success', () => {
  render(<Login />);
  fireEvent.change(screen.getByTestId('reg-email-input'), { target: { value: 'a@b.com' } });
  fireEvent.change(screen.getByTestId('reg-user-input'), { target: { value: 'user' } });
  fireEvent.change(screen.getByTestId('reg-password-input'), { target: { value: '123456' } });
  fireEvent.change(screen.getByTestId('reg-dob-input'), { target: { value: '2000-01-01' } });
  fireEvent.submit(screen.getByTestId('register-form'));
  expect(screen.getByTestId('message-alert').textContent).toMatch(/registrado con éxito/i);
});

});