import React from 'react'
import { useState } from 'react';
import Footer from '../components/Footer';
import MenuHeader from '../components/MenuHeader';
import "./Acceder.css";
const Acceder = () => {

    const [usuario,setUsuario] = useState("");
    const [password,setPassword] = useState("");
    const [usuarioAdmin,setUsuarioAdmin] = useState("");
    const [passwordAdmin,setPasswordAdmin] = useState("");

    const gestorUsuario = (e) =>{
        setUsuario(e.target.value);
    }
    const gestorPassword = (e) =>{
        setPassword(e.target.value);
    }

    const gestorUsuarioAdmin = (e) =>{
        setUsuarioAdmin(e.target.value);
    }

    const gestorPasswordAdmin = (e) =>{
        setPasswordAdmin(e.target.value);
    }

    const submitEstudiaEnCasa = (e) =>{
        e.preventDefault();

        if(usuario==="" || password===""){
            console.log("Debe especificar usuario y contraseña válidos");
        }else{
            console.log("Usuario Valido")
        }
    }

    const submitAdministracion = (e) =>{
        e.preventDefault();

        if(usuarioAdmin==="" || passwordAdmin===""){
            console.log("Debe especificar usuario y contraseña válidos");
        }else{
            console.log("Usuario Valido")
        }
    }

    return (
        <div className="divAcceder">
            <MenuHeader/>
            <main className="main mainAcceder">
                <div className="divFormularioEstudiaEnCasa col-12 col-md-5">
                    <h3>Acceso a Estudia en Casa</h3>
                    <form action="" onSubmit={submitEstudiaEnCasa}>
                        <label htmlFor="usuario">Usuario</label>
                        <input type="text" name="usuario" id="usuario" onChange={gestorUsuario} value={usuario}/>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" onChange={gestorPassword} value={password}/>
                        <button>Acceder</button>
                    </form>
                </div>
                <div className="divFormularioAdministracion col-12 col-md-5">
                <h3>Acceso a Administración</h3>
                    <form action="" onSubmit={submitAdministracion}>
                        <label htmlFor="usuarioAdmin">Usuario</label>
                        <input type="text" name="usuarioAdmin" id="usuario" onChange={gestorUsuarioAdmin} value={usuarioAdmin}/>
                        <label htmlFor="passwordAdmin">Contraseña</label>
                        <input type="password" name="passwordAdmin" id="passwordAdmin" onChange={gestorPasswordAdmin} value={passwordAdmin}/>
                        <button>Acceder</button>
                    </form>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Acceder
