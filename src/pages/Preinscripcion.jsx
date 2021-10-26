import React from 'react'
import { useLocation} from 'react-router';
import MenuHeader from '../components/MenuHeader';
import Footer from '../components/Footer';
import { useState } from 'react';
import "./Preinscripcion.css";
const Preinscripcion = () => {
    // UseLocation para acceder a los parametros que le pasamos con el history.push desde el otro componente
    const location = useLocation();
    // Obtenemos los datos del curso
    const nombreCurso =location.state.curso.nombreCurso;

    // Variables de los campos del formulario
    const [nombre,setNombre] = useState("");
    const [primerApellido,setPrimerApellido] = useState("");
    const [segundoApellido,setSegundoApellido] = useState("");
    const [fechaNacimiento,setFechaNacimiento] = useState("");
    const [pais,setPais] = useState("");
    const [provincia,setProvincia] = useState("");
    const [municipio,setMunicipio] = useState("");
    const [dni,setDni] = useState("");
    const [telefono,setTelefono] = useState("");
    const [email,setEmail] = useState("");
    const [nivelAcademico,setNivelAcademico] = useState("");
    const [especialidad,setEspecialidad] = useState("");
    const [situacionLaboral,setSituacionLaboral] = useState("");
    const [formaDeAcceso, setFormaDeAcceso] = useState("");
    const [medioConocimiento, setMedioConocimiento] = useState("");
    const [condicionesLegales,setCondicionesLegales] = useState(false);

    // Manejo de errores

    let [errorNombre,setErrorNombre] = useState("");
    let [errorPrimerApellido, setErrorPrimerApellido ]= useState("");
    let [errorSegundoApellido,setErrorSegundoApellido] = useState("");
    let [errorFechaNacimiento, setErrorFechaNacimiento ] = useState("");
    let [errorPais,setErrorPais ] = useState("");
    let [errorProvincia , setErrorProvincia]= useState("");
    let [errorMunicipio, setErrorMunicipio] = useState("");
    let [errorDni, setErrorDni] = useState("");
    let [errorTelefono , setErrorTelefono]= useState("");
    let [errorEmail, setErrorEmail ] = useState("");
    let [errorNivelAcademico, setErrorNivelAcademico ] = useState("");
    let [errorEspecialidad, setErrorEspecialidad]= useState("");
    let [errorSituacionLaboral, setErrorSituacionLaboral ] = useState("");
    let [errorCondicionesLegales, setErrorCondicionesLegales ]= useState("");

    // Gestores de los campos del formulario

    const gestorNombre = (e) =>{
        setNombre(e.target.value);
    }

    const gestorPrimerApellido = (e) =>{
        setPrimerApellido(e.target.value);
    }

    const gestorSegundoApellido = (e) =>{
        setSegundoApellido(e.target.value);
    }

    const gestorFechaNacimiento = (e) =>{
        setFechaNacimiento(e.target.value);
    }

    const gestorPais = (e) =>{
        setPais(e.target.value);
    }

    const gestorProvincia = (e) =>{
        setProvincia(e.target.value);
    }

    const gestorMunicipio = (e) =>{
        setMunicipio(e.target.value);
    }

    const gestorDni = (e) =>{
        setDni(e.target.value);
    }

    const gestorTelefono = (e) =>{
        setTelefono(e.target.value);
    }

    const gestorEmail = (e) =>{
        setEmail(e.target.value);
    }

    const gestorNivelAcademico = (e) =>{
        setNivelAcademico(e.target.value);
    }

    const gestorEspecialidad = (e) =>{
        setEspecialidad(e.target.value);
    }

    const gestorSituacionLaboral = (e) =>{
        setSituacionLaboral(e.target.value);
    }

    const gestorFormaAcceso = (e) =>{
        setFormaDeAcceso(e.target.value);
    }

    const gestorMedioConocimiento = (e) =>{
        setMedioConocimiento(e.target.value);
    }

    const gestorCondicionesLegales = (e) =>{
        if(condicionesLegales !== true){
            setCondicionesLegales(true);
        }else{
            setCondicionesLegales(false);
        }
    }

    // Funcion de gestion del formulario al darle a enviar
    
    const submit = (e)=>{
        e.preventDefault();

        if(nombre===""){
          setErrorNombre("*");
        }else{
            setErrorNombre("");  
        }

        if(primerApellido === "" || !isNaN(primerApellido)){
           setErrorPrimerApellido("*");
        }else{
            setErrorPrimerApellido("");
        }

        if(segundoApellido === "" || !isNaN(segundoApellido)){
           setErrorSegundoApellido("*");
        }else{
            setErrorSegundoApellido("");
        }

        // Match para verificar la correcta formacion de la fecha de nacimiento
        if(fechaNacimiento===""||fechaNacimiento.match(/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/)){
            setErrorFechaNacimiento("*");
        }else{
            setErrorFechaNacimiento("");
        }

        if(pais==="" || !isNaN(pais) ){
           setErrorPais("*");
        }else{
            setErrorPais("");
        }

        if(provincia==="" || !isNaN(provincia) ){
           setErrorProvincia("*");
        }else{
            setErrorProvincia("");
        }

        if(municipio==="" || !isNaN(municipio) ){
         setErrorMunicipio("*");
        }else{
            setErrorMunicipio("");
        }

        if(dni===""){
           setErrorDni("*");
        }else{
            setErrorDni("");
        }

        if(telefono===""||telefono.length<9 || telefono.length>9 || isNaN(telefono)){
           setErrorTelefono("*");
        }else{
            setErrorTelefono("");
        }

        if(email===""){
            setErrorEmail("*");
        }else{
            setErrorEmail("");
        }

        if(nivelAcademico===""){
           setErrorNivelAcademico("*");
        }else{
            setErrorCondicionesLegales("");
        }

        if(especialidad===""){
          setErrorEspecialidad("*");
        }else{
            setErrorEspecialidad("");
        }

        if(situacionLaboral===""){
            setErrorSituacionLaboral("*");

        }else{
            setErrorSituacionLaboral("");
        }

        if(condicionesLegales===false){
            setErrorCondicionesLegales("*");

        }else{
            setErrorCondicionesLegales("");
        }

        if(errorNombre ==="" && errorPrimerApellido===""&&errorSegundoApellido===""&& errorFechaNacimiento===""&&errorPais===""&&errorProvincia===""&&errorMunicipio==="" && errorDni===""&&errorTelefono==="" && errorEmail===""&&errorNivelAcademico===""&&errorEspecialidad===""&&errorSituacionLaboral===""&&errorCondicionesLegales===""){
            console.log("Enviado");
        }else{
            console.log("Hay algun fallo");
        }
    
        // Resetear los valores de los campos del formulario
        setNombre("");
        setPrimerApellido("");
        setSegundoApellido("");
        setFechaNacimiento("");
        setPais("");
        setProvincia("");
        setMunicipio("");
        setDni("");
        setTelefono("");
        setEmail("");
        setNivelAcademico("");
        setEspecialidad("");
        setSituacionLaboral("");
        setFormaDeAcceso("");
        setMedioConocimiento("");
        setCondicionesLegales(false);

    }
    return (
        <div className="divPreinscripcionCurso">
            <MenuHeader/>
            <main className="main">
                <h1>Preinscripcion</h1>
                <h3>{nombreCurso}</h3>
                <div className="formularioPreinscripcion">
                    <form action="" onSubmit={submit}>
                        <div className="headerPreinscripcion col-12">
                            <h3>Datos Personales</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" name="nombre" id="nombre" onChange={gestorNombre} value={nombre} />
                                <span>{errorNombre}</span>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="primerApellido">Primer Apellido:</label>
                                <input type="text" name="primerApellido" id="primerApellido" onChange={gestorPrimerApellido}  value={primerApellido} />
                                <span>{errorPrimerApellido}</span>
                            </div>
                            <div className="form-group col-12 col-md-6"> 
                                <label htmlFor="segundoApellido">Segundo Apellido:</label>
                                <input type="text" name="segundoApellido" id="segundoApellido" onChange={gestorSegundoApellido} value={segundoApellido} />
                                <span>{errorSegundoApellido}</span>
                            </div>
                            <div className="form-group col-12 col-md-6"> 
                                <label htmlFor="fechaNacimiento">Fecha Nacimiento:</label>
                                <input type="date" name="fechaNacimiento" id="fechaNacimiento" onChange={gestorFechaNacimiento} value={fechaNacimiento} />
                                <span>{errorFechaNacimiento}</span>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="pais">Pais:</label>
                                <input type="text" name="pais" id="pais" value={pais} onChange={gestorPais}  />
                                <span>{errorPais}</span>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="provincia">Provincia:</label>
                                <input type="text" name="provincia" id="provincia" value={provincia} onChange={gestorProvincia}  />
                                <span>{errorProvincia}</span>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="municipio">Municipio:</label>
                                <input type="text" name="municipio" id="municipio" value={municipio} onChange={gestorMunicipio}  />
                                <span>{errorMunicipio}</span>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="dni">D.N.I o N.I.E:</label>
                                <input type="text" name="dni" id="dni" value={dni} onChange={gestorDni}  />
                                <span>{errorDni}</span> 
                            </div>
                        </div>
                        <div className="headerPreinscripcion col-12">
                            <h3>Datos Contacto</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="telefono">Telefono:</label>
                                <input type="tel" name="telefono" id="telefono" maxLength="9" value={telefono} onChange={gestorTelefono}  />
                                <span>{errorTelefono}</span>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="email">Correo:</label>
                                <input type="email" name="email" id="email" value={email} onChange={gestorEmail}  />
                                <span>{errorTelefono}</span>
                            </div>
                        </div>
                        <div className="headerPreinscripcion col-12">
                            <h3>Situacion Laboral</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12 col-lg-4">
                                <label htmlFor="nivelAcademico">Nivel Academico:</label>
                                <select name="nivelAcademico" id="nivelAcademico" value={nivelAcademico} onChange={gestorNivelAcademico}>
                                    <option value="nivelAcademico" selected>Nivel Academico</option>
                                    <option value="otra">otra</option>
                                </select>
                                <span>{errorNivelAcademico}</span>
                            </div>
                            <div className="form-group col-12 col-lg-4">
                                <label htmlFor="especialidad">Especialidad:</label>
                                <select name="especialidad" id="especialidad" value={especialidad} onChange={gestorEspecialidad}>
                                <option value="especialidad" selected>Especialidad</option>
                                <option value="otra">otra</option>
                                </select>
                                <span>{errorEspecialidad}</span>
                            </div>
                            <div className="form-group col-12 col-lg-4">
                                <label htmlFor="situacionLaboral">Situacion Laboral:</label>
                                <select name="situacionLaboral" id="situacionLaboral" value={situacionLaboral} onChange={gestorSituacionLaboral}>
                                    <option value="situacionLaboral">Situacion Laboral</option>
                                    <option value="otra">otra</option>
                                </select>
                                <span>{errorSituacionLaboral}</span>
                            </div>
                        </div>
                        <div className="headerPreinscripcion col-12">
                            <h3>Otros Datos</h3>
                        </div>
                        <div className="datosPreinscripcion">
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="formaDeAcceso">¿Como nos has Conocido?</label>
                                <select name="formaDeAcceso" id="formaDeAcceso" value={formaDeAcceso} onChange={gestorFormaAcceso}>
                                    <option value="---">---</option>
                                </select>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label htmlFor="medioConocimiento">Otro Medio:</label>
                                <input type="text" name="medioConocimiento" id="medioConocimiento" value={medioConocimiento} onChange={gestorMedioConocimiento}/>
                            </div>
                        </div>
                        <div className="headerPreinscripcion col-12">
                            <h3>Condiciones Legales</h3>
                        </div>
                        <div className="datosPreinscripcion condicionesLegales">
                            <div className="form-group col-12">
                            <input type="checkbox" name="condicionesLegales" id="condicionesLegales" onChange={gestorCondicionesLegales}/>
                            <p>He leido y acepto las <a href="https://www.academiadf.com/adfv2012/ADF_Politica.aspx">Condiciones Legales</a></p>
                            </div>
                        </div>
                        <button>Preinscribirte</button>
                    </form>
                </div> 
            </main>
            <Footer/>
        </div>
    )
}

export default Preinscripcion
