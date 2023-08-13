import React, { useState } from 'react';
import "./login.scss"


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    if (username === 'usuario' && password === 'contraseña') {
            setError('');
      // Realizar acciones de inicio de sesión exitos
        console.log('Inicio de sesión exitoso');
    } else {
        setError('Usuario no registrado');
    }
    };

    return (
        <div className='login_container' >
            <h2>Iniciar Sesión</h2>
            <form className='form_login' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Usuario:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div style={{ color: 'red' }}>{error}</div>
                <button type="submit">Iniciar Sesión</button>
                <button type="submit">Registrarse</button>

            </form>
        </div>
    );
}

    export default Login;
