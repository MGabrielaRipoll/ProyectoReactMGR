import React, { useState } from 'react';
import "./login.scss";
import { useAuth } from '../componentes/Context/AuthContext';

function Login() {
    const { setLoggedIn } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(''); 
    const [loginMessage, setLoginMessage] = useState('');

    const handleLogin = () => {
        if (username === 'usuario' && password === 'react2023') {
            setLoggedIn(true);
            setError(''); 
            setLoginMessage('Inicio de sesión exitoso');
        } else {
            setError('Usuario no registrado');
        }
    }
    const handleLogout = () => {
        setLoggedIn(false);
        sessionStorage.removeItem('loggedIn');
        setLoginMessage('La sesión se cerro con exito');

    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className='login_container'>
            <h2 className='encabezado_login'>Iniciar Sesión</h2>
            <form className='form_login' onSubmit={handleLogin}>
            <div className='contenedor_label'>
                <div>
                    <label className='label_login' htmlFor="username">Usuario:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div>
                        <label className='label_login' htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                </div>
                <div style={{ color: 'red' }}>{error}</div>   
                <div style={{ color: 'green' }}>{loginMessage}</div> 
                <div className='contenedor_button'>
                    <button type="submit">Iniciar Sesión</button>
                    <button onClick={handleLogout} type="button">Cerrar Sesion</button>
                </div>
            </form>
        </div>
    );
};

export default Login;

