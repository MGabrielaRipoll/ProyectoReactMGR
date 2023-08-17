// import React, { useState , useContext} from 'react';
// import { Link } from "react-router-dom";
// import "./login.scss";
// import { useAuth } from '../componentes/Context/AuthContext';
// import { CartContext } from "../componentes/Context/CartContext";
// import { db } from '../src/firebase/config';
// import { collection, getDocs  } from 'firebase/firestore';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';




// function Login() {
//     const { vaciarCarrito } = useContext(CartContext);
//     const { setLoggedIn } = useAuth();
//     const [loginMessage, setLoginMessage] = useState('');

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const notify_error = (mesagge) => {
//         toast.error(mesagge);
//     };

//     const notify_login = (mesagge) => {
//         toast.success(mesagge);
//     };


//     const handleLogin = async () => {

//         try {

//             if (!username || !password ) {
//                 notify_error('Por favor, complete todos los campos');
//                 return;
//             }
//             const usersRef = collection(db, 'users');
//             const querySnapshot = await getDocs(usersRef);
//             console.log(usersRef);
            
//             querySnapshot.forEach((doc) => {
//                 const userData = doc.data();
                
//                 if (userData.usuario === username && userData.contrasenia === password) {
//                     toast.success('Inicio de sesión exitoso');
//                     return
//                 }
//             });

//             toast.error('Usuario o contraseña incorrectos');
//         } catch (error) {
//             toast.error('Ha ocurrido un error, intente nuevamente');
//         }

//     };


//     // const handleLogin = () => {
//     //     const querySnapshotPromise = getDocs(usersRef);
//     //     querySnapshotPromise.then((querySnapshot) => {
//     //         let isLoggedIn = false;
            
//     //         if (!username || !password) {
//     //             notify_error('Por favor, complete todos los campos');
//     //             return;
//     //         }
    
//     //         querySnapshot.forEach((doc) => {
//     //             const userData = doc.data();
//     //             if (userData.usuario === username && userData.contrasenia === password) {
//     //                 isLoggedIn = true;
//     //                 console.log(userData, username, password, user.contrasenia, setUsername, setPassword);
//     //                 return;
//     //             }
//     //         });
    
//     //         if (isLoggedIn) {
//     //             setLoggedIn(true);
//     //             notify_login('Inicio de sesión exitoso');
//     //             setLoginMessage(`Usted está bajo el usuario ${username}`);
//     //         } else {
//     //             notify_error('Usuario no registrado');
//     //             setLoggedIn(false);
//     //         }
//     //     }).catch((error) => {
//     //         notify_error('Ups, ha ocurrido un error, intente nuevamente');
//     //         setLoggedIn(false);
//     //     });
//     // };

//     const handleLogout = () => {
//         setLoggedIn(false);
//         sessionStorage.removeItem('loggedIn');
//         notify_login('La sesión se cerró con éxito');
//         vaciarCarrito();
//     };

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     return (
//         <div className='login_container'>
//             <h2 className='encabezado_login'>Iniciar Sesión</h2>
//             <form className='form_login'>
//             <div className='contenedor_label'>
//                 <div>
//                     <label className='label_login' htmlFor="username">Usuario:</label>
//                         <input
//                             type="text"
//                             id="username"
//                             value={username}
//                             onChange={handleUsernameChange}
//                         />
//                     </div>
//                     <div>
//                         <label className='label_login' htmlFor="password">Contraseña:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={handlePasswordChange}
//                         />
//                     </div>
//                 </div>
//                 <div style={{ color: 'green' }}>{loginMessage}</div>
//                 <div className='contenedor_button'>
//                     <button onClick={handleLogin}>Iniciar Sesión</button>
//                     <button onClick={handleLogout} type="button">Cerrar Sesion</button>
//                     <Link className="link_volver" to="/contacto">
//                         <button type="button">Registrarme</button>
//                     </Link>
//                 </div>
//             </form>
//         </div>
//     );

//     }
// export default Login;

import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';
import { useAuth } from '../componentes/Context/AuthContext';
import { CartContext } from '../componentes/Context/CartContext';
import { db } from '../src/firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const { vaciarCarrito } = useContext(CartContext);
    const { setLoggedIn } = useAuth();
    const [loginMessage, setLoginMessage] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
        if (!username || !password) {
            notify('Por favor, complete todos los campos', 'error');
            return;
        }
        const usersRef = collection(db, 'users');
        const querySnapshot = await getDocs(usersRef);

        for (const doc of querySnapshot.docs) {
            const userData = doc.data();
            if (userData.usuario === username && userData.contrasenia === password) {
            notify('Inicio de sesión exitoso', 'success');
            setUsername('');
            setPassword('');
            setLoggedIn(true);
            setLoginMessage(`Usted esta navegando bajo el usuario: ${username}`);
            return
            }
        }
    
        notify('Usuario o contraseña incorrectos', 'error');
        } catch (error) {
        notify('Ha ocurrido un error, intente nuevamente', 'error');
        }
    };

    const handleLogout = () => {    
        setLoggedIn(false);
        sessionStorage.removeItem('loggedIn');
        notify('La sesión se cerró con éxito', 'success');
        setUsername('');
        setPassword('');
        setLoginMessage(``)
        vaciarCarrito();
        }


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const notify = (message, type) => {
        if (type === 'error') {
        toast.error(message);
        } else if (type === 'success') {
        toast.success(message);
        }
    };



    return (
        <div className='login_container'>
            <h2 className='encabezado_login'>Iniciar Sesión</h2>
            <form className='form_login'>
                <div className='contenedor_label'>
                <div>
                    <label className='label_login' htmlFor='username'>
                    Usuario:
                    </label>
                    <input type='text' id='username' value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label className='label_login' htmlFor='password'>
                    Contraseña:
                    </label>
                    <input type='password' id='password' value={password} onChange={handlePasswordChange} />
                </div>
                </div>
                <div style={{ color: 'green' }}>{loginMessage}</div>
                <div className='contenedor_button'>
                <button onClick={handleLogin} type='button'>
                    Iniciar Sesión
                </button>
                <button onClick={handleLogout} type='button'>
                    Cerrar Sesión
                </button>
                <Link className='link_volver' to='/contacto'>
                    <button type='button'>Registrarme</button>
                </Link>
                </div>
            </form>
        </div>
    );
    }