import React from 'react'
import MenuHeader from '../components/MenuHeader';
import { useState } from 'react';
import "./Contacto.css";
import Footer from '../components/Footer';
const Contacto = () => {
    const [nombre,setNombre] = useState("");
    const [email,setEmail] = useState("");
    const [telefono,setTelefono] = useState("");
    const [centro,setCentro] = useState("");
    const [mensaje,setMensaje] = useState("");
    const [condicionesLegales,setCondicionesLegales] = useState(false);
    const [errores,setErrores] = useState("");

    // Gestores de los inputs del formulario de Contacto

    const gestorNombre = (e)=>{
        setNombre(e.target.value);
    };

    const gestorEmail = (e)=>{
        setEmail(e.target.value);
    };

    const gestorTelefono = (e)=>{
        setTelefono(e.target.value);
    };

    const gestorCentro = (e) =>{
        setCentro(e.target.value);
    }

    const gestorMensaje = (e)=>{
        setMensaje(e.target.value);
    }

    const gestorCondicionesLegales = (e) =>{
        if(condicionesLegales !== true){
            setCondicionesLegales(true);
        }else{
            setCondicionesLegales(false);
        }
    }

    // Funcion del submit del formulario, si conectamos a la bd debemos hacer un async 
    const submit = (e) =>{
        e.preventDefault();
        if(nombre === "" || !isNaN(nombre)){
            setErrores("Escriba un nombre válido");
        }
        if(email ===""){
            setErrores("Escriba un email válido");
        }
        if(telefono.length <9 || isNaN(telefono)|| telefono===""){
            setErrores("Escriba un numnero de telefono valido");
        }
        if(mensaje === ""){
            setErrores("Debe escribir un mensaje");
        }
        console.log(errores);
        setNombre("");
        setEmail("");
        setTelefono("");
        setCentro("");
        setMensaje("");

    }

    return (
        <div className="divContacto">
            <MenuHeader/>  
            <main className="main">
                <h1>Contacto</h1>
                <p>En GRUPO ADF estamos para ayudarte en lo que necesites. Puedes ponerte en contacto con nosotros o acercarte por nuestras oficinas situadas en las siguientes direcciones:</p>
                <div className="tarjetasContacto">
                    <div className="tarjetaDireccion col-10 col-lg-3">
                        <div className="imagenTarjeta1"></div>
                        <h4>ADF Gáldar</h4>
                        <div className="direccion">
                                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=ACADEMIA%20DE%20DESARROLLO%20FORMATIVO%20SL&t=k&z=13&ie=UTF8&iwloc=&output=embed" title="Adf Gáldar"></iframe>
                        </div>
                        <div className="tarjetaInfo">
                            <p><span>Tfno:</span>928880986</p>
                            <p><span>Whatsapp:</span>928880986</p>
                            <p><span>Email:</span>galdar@academiadf.com</p>
                        </div>
                    </div>
                    <div className="tarjetaDireccion col-10  col-lg-3">
                        <div className="imagenTarjeta2"></div>
                        <h4>CIFE Telde - Las Huesas</h4>
                        <div className="direccion">
                                <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=C%C3%ADrculo%20de%20Formaci%C3%B3n,%20Empleo%20e%20Innovaci%C3%B3n&t=k&z=13&ie=UTF8&iwloc=&output=embed" title="CIFP Telde - Las Huesas">
                                </iframe>
                        </div>
                        <div className="tarjetaInfo">
                            <p><span>Tfno:</span>828026302</p>
                            <p><span>Whatsapp:</span>693819934</p>
                            <p><span>Email:</span>telde@academiadf.com</p>  
                        </div>
                    </div>
                    <div className="tarjetaDireccion  col-10 col-lg-3">
                        <div className="imagenTarjeta3"></div>
                        <h4>Formavanza Tamaraceite</h4>
                        <div className="direccion">
                                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Formavanza&t=&z=13&ie=UTF8&iwloc=&output=embed" title="Formavanza Tamaraceite"></iframe>
                        </div>
                        <div className="tarjetaInfo">
                            <p><span>Tfno:</span>928170744</p>
                            <p><span>Whatsapp:</span>605291392</p>
                            <p><span>Email:</span>tamaraceite@academiadf.com</p>
                        </div>
                    </div>
                </div>
                <div className="formularioContacto col-10 col-sm-10 col-md-10">
                    <form action="" onSubmit={submit} className="formContacto">
                        <div className="form-group col-12 col-md-12 col-lg-6">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" value={nombre} onChange={gestorNombre}/>
                        </div>
                        <div className="form-group col-12  col-md-12 col-lg-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={gestorEmail}/>
                        </div>
                        <div className="form-group col-12 col-md-12 col-lg-6">
                        <label htmlFor="telefono">Telefono</label>
                        <input type="tel" name="telefono" id="telefono" maxLength="9" value={telefono} onChange={gestorTelefono}/>
                        </div>
                        <div className="form-group col-12 col-md-12 col-lg-6">
                        <label htmlFor="centroFormacion">Centro</label>
                            <select name="centroFormacion" id="centroFormacion" value={centro} onChange={gestorCentro}>
                                <option value=""> CIFE Telde - Las Huesas</option>
                                <option value="">ADF Gáldar</option>
                                <option value="">Formavanza Tamaraceite</option>
                            </select>
                        </div>
                        <div className="form-textarea col-10">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" value={mensaje} onChange={gestorMensaje}>

                        </textarea>
                        </div>
                        <div className="form-check col-12">
                        <input type="checkbox" name="condicionesLegales" id="condicionesLegales" onChange={gestorCondicionesLegales}/>
                        <p>He leido y acepto las <a href="https://www.academiadf.com/adfv2012/ADF_Politica.aspx">Condiciones Legales</a></p>
                        </div>
                        <button>Enviar</button>
                    </form>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Contacto
