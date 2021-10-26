import React from 'react'
import "./Empleo.css";
import Footer from '../components/Footer';
import MenuHeader from "../components/MenuHeader.jsx"
import img1 from "../img/carousel/1.jpg"
import img2 from "../img/carousel/2.jpg"
import img3 from "../img/carousel/4.jpg"
import img4 from "../img/carousel/5.jpg"
import { Carousel } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
const Empleo = () => {
  const [nombre,setNombre] = useState("");
  const [email,setEmail] = useState("");
  const [telefono,setTelefono] = useState("");
  const [mensaje,setMensaje] = useState("");
  const [condicionesLegales,setCondicionesLegales] = useState(false);
  // Manejo de los errores
  const [errorNombre,setErrorNombre] = useState("");
  const [errorEmail,setErrorEmail] = useState("");
  const [errorTelefono,setErrorTelefono] = useState("");
  const [errorMensaje,setErrorMensaje] = useState("");
  const [errorCondicionesLegales,setErrorCondicionesLegales] = useState(false);
  const gestorNombre = (e)=>{
    setNombre(e.target.value);
  };

  const gestorEmail = (e)=>{
      setEmail(e.target.value);
  };

  const gestorTelefono = (e)=>{
      setTelefono(e.target.value);
  };

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
  
  const submit = (e) =>{
    e.preventDefault();
    if(nombre === ""){
      setErrorNombre("*");
    }else{
      setErrorNombre("");
    }
    if(email ===""){
      setErrorEmail("*");
    }else{
      setErrorEmail("");
    }
    if(telefono.length <9 || isNaN(telefono)|| telefono===""){
        setErrorTelefono("*");
    }else{
      setErrorTelefono("");
    }
    if(mensaje === ""){
        setErrorMensaje("*");
    }else{
      setErrorMensaje("");
    }
    if(condicionesLegales === false){
      setErrorCondicionesLegales("*");
    }else{
      setCondicionesLegales("");
    }
   if(errorNombre==="" && errorTelefono===""&&errorMensaje===""&& errorEmail===""&&errorCondicionesLegales===""){
     console.log(nombre + " " +email+ " " +telefono+ " " +mensaje+ " " +condicionesLegales);
   }
    setNombre("");
    setEmail("");
    setTelefono("");
    setMensaje("");
    setCondicionesLegales(false);
}

return (
<div className="divEmpleo">
    <MenuHeader/>
    <main className="main">
        <h1>Las Reglas han cambiado, ¿Aceptas el reto?</h1>
        <Carousel className="carousel col-8">
          <Carousel.Item className="carouselItem" interval={3000}>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carouselItem" interval={3000}>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carouselItem"  interval={3000}>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carouselItem"  interval={3000}>
            <img
              className="d-block w-100"
              src={img4}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
          <h3>Nosotros sí, y por ello te proponemos:</h3>
        <div className="tarjetasEmpleo col-12">
          <div className="tarjetaEmpleo col-10 col-md-5">
            <h4>Si buscas Empleo</h4>
            <p>Bolsa de empleo Servicio de orientación laboral individualizado Asesoramiento para emprendedores Talleres de búsqueda activa de empleo, motivación y simulación de entrevistas</p>
            <div className="button"><a href="https://www.empleoaqui.com/candidatos" target="_blank" rel="noreferrer"> Ver ofertas de Empleo</a></div>
          </div>
          <div className="tarjetaEmpresa col-10 col-md-5">
            <h4>Si eres una Empresa</h4>
            <p>Bolsa de empleo Servicio de orientación laboral individualizado Asesoramiento para emprendedores Talleres de búsqueda activa de empleo, motivación y simulación de entrevistas</p>
            <div className="button"><a href="https://www.empleoaqui.com/empresas" target="_blank" rel="noreferrer"> Encontrar Candidatos</a></div>
          </div>
        </div>
          <h3>¿Que son las agencias de colocación?</h3>
          <p>Las agencias de colocación son entidades públicas o privadas que, una vez autorizadas por los servicios públicos de empleo, realizan actividades de intermediación laboral con una doble finalidad: proporcionar a las personas trabajadoras un empleo adecuado a sus características y facilitar a los empleadores las personas trabajadoras más apropiadas a sus requerimientos y necesidades.</p>
        <div className="tarjetasContacto col-12">
          <div className="tarjetaCentros col-10 col-md-5">
            <h4>Centros Autorizados</h4>
            <h5>ADF Gáldar</h5>
            <p>Agencia de Colocación Autorizada por el Servicio Público de Empleo Estatal con nº 0500000003</p>
            <p><span>Direccion:</span> Ctra. Subida Hoya Pineda, s/n. , (Gáldar) 35460 Gran Canaria (Las Palmas).</p>
            <p><span>Tfno:</span>928880986</p>
            <h5>CIFE Telde</h5>
            <p>Agencia de Colocación Autorizada por el Servicio Público de Empleo Estatal con nº 0500000028</p>
            <p><span>Direccion:</span> Calle Manuel García Oliva, 19 (Telde) 35200 Gran Canaria (Las Palmas).</p>
            <p><span>Tfno:</span>828026302</p>
            <h5>FormAvanza Tamaraceite</h5>
            <p>Agencia de Colocación Autorizada por el Servicio Público de Empleo Estatal con nº 0500000027</p>
            <p><span>Direccion:</span>Carretera Tamaraceite a Teror, 41 (Tamaraceite) 35018 Gran Canaria (Las Palmas).</p>
            <p><span>Tfno:</span>928170744</p>
          </div>
          <div className="tarjetaFormulario col-10 col-md-5">
            <h4>Para cualquier consulta, contacta con nosotros:</h4>
            <form action="" onSubmit={submit}>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" name="nombre" id="nombre" value={nombre} onChange={gestorNombre}/>
              <span>{errorNombre}</span>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" value={email} onChange={gestorEmail}/>
              <span>{errorEmail}</span>
              <label htmlFor="telefono">Telefono:</label>
              <input type="tel" name="telefono" id="telefono" maxLength="9" value={telefono} onChange={gestorTelefono}/>
              <span>{errorTelefono}</span>
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea name="mensaje" id="mensaje" value={mensaje} onChange={gestorMensaje}>
                

              </textarea>
              <span>{errorMensaje}</span>
              <div className="form-check col-12">
                        <input type="checkbox" name="condicionesLegales" id="condicionesLegales" onChange={gestorCondicionesLegales}/>
                        <p>He leido y acepto las <a href="https://www.academiadf.com/adfv2012/ADF_Politica.aspx">Condiciones Legales</a></p>
                        <span>{errorCondicionesLegales}</span>
              </div>
              <button>Enviar</button>
            </form>
          </div>
        </div>
    </main>
    <Footer/>
</div>
)
}

export default Empleo