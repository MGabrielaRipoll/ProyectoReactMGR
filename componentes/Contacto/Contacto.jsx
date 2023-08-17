import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Contacto.scss"
import React, { useState } from 'react';
import { db } from '../../src/firebase/config';
import { collection, addDoc, getDocs  } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contacto =() => {


    const [usuario, setUsuario] = useState('');
    const [contrasenia, setPassword] = useState('');
    const [nombre_apellido, setNombre_apellido] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [localidad, setLocalidad] = useState('');

    const notify_error = (mesagge) => {
        toast.error(mesagge);
      };

    const notify_login = (mesagge) => {
        toast.success(mesagge);
    };
    const handleSignup = async () => {
        try {
            

            if (!usuario || !contrasenia || !domicilio || !localidad || !nombre_apellido ) {
                notify_error('Por favor, complete todos los campos');
                return;
            }
            
            const usersRef = collection(db, 'users');
            const querySnapshot = await getDocs(usersRef);
            let isDuplicateUser = false; 
            
            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                if (userData.usuario === usuario && userData.contrasenia === contrasenia) {
                    isDuplicateUser = true;
                    return; 
                }
            });

            if (isDuplicateUser) {
                notify_error('Usuario ya registrado'); } else {

                const user = {
                    usuario: usuario,
                    contrasenia: contrasenia,
                    nombre_apellido: nombre_apellido,
                    domicilio: domicilio,
                    localidad:localidad
                };
                await addDoc(usersRef, user);


                notify_login('Registro Exitoso');
                setUsuario('');
                setPassword('');
                setNombre_apellido('');
                setDomicilio('');
                setLocalidad('');
                
                }

            } catch (error) {

                notify_error('Ups, ha ocurrido un error, intente nuevamente');

            }
        
    };
    
    return (
    

    <Form className='contenedor_formulario'>
        <Form.Group as={Col} controlId="formGridUsuario">
            <Form.Label className='Form_label' >Usuario</Form.Label>
                <Form.Control type="usuario" 
                              placeholder="Ingrese su usuario" 
                              value={usuario}
                              onChange={(e) => setUsuario(e.target.value)}
                              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className='Form_label' >Contraseña</Form.Label>
            <Form.Control type="password" 
                          placeholder="Contraseña" 
                          value={contrasenia}
                          onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

        <Form.Group className="mb-3" controlId="formGridNombre">
            <Form.Label className='Form_label' >Nombre y Apellido</Form.Label>
            <Form.Control placeholder="Nombre y Apellido"
                          value={nombre_apellido}
                          onChange={(e) => setNombre_apellido(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label className='Form_label' >Domicilio</Form.Label>
            <Form.Control placeholder="Calle y numero"
                          value={domicilio}
                          onChange={(e) => setDomicilio(e.target.value)} />
        </Form.Group>


            <Form.Group as={Col} controlId="formGridCiudad">
                <Form.Label className='Form_label' >Localidad</Form.Label>
                <Form.Control value={localidad}
                              onChange={(e) => setLocalidad(e.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridProvincia">
                <Form.Label className='Form_label' >Provincia</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Elija...</option>
                        <option>Buenos Aires</option>
                        <option>CABA</option>
                        <option>Cordoba</option>
                        <option>Mendoza</option>
                        <option>San Juan</option>
                        <option>San Luis</option>
                        <option>Tierra del Fuego</option>
                        <option>Chaco</option>
                        <option>Jujuy</option>
                        <option>Salta</option>
                        <option>Chubut</option>
                    </Form.Select>
            </Form.Group>
            <Stack direction="row" spacing={2}>
                <Button onClick={handleSignup} variant="contained" color="success">
                    Registrarme
                </Button>
            </Stack>
           
        </Form>
    
    );
    };

export default Contacto;

