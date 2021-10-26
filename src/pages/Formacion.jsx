import React from 'react';
import "./Formacion.css";
import MenuHeader from '../components/MenuHeader.jsx';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
// import { FaMapMarkedAlt } from "react-icons/fa";
// import { FaClock } from 'react-icons/fa';
// import { FaCalendarAlt } from 'react-icons/fa';
// import { FaFlag } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
const Formacion = () => {

// Declaramos el history para pasar los datos a la siguiente pagina segun sea la eleccion del usuario
const history = useHistory();
// Variables para la busqueda del curso
const [curso,setCurso] = useState("");
const [familiaProfesional,setFamiliaProfesional] = useState("");
const [situacionLaboral,setSituacionLaboral] = useState("");

// Variables para evitar la repeticion de los select del buscador

const [selectFP,setSelectFP] = useState([]);
const [selectSitacion,setSelectSituacion] = useState([]);

const [arrayCursos,setArrayCursos] = useState([
        {
            imagenCurso:"https://adfdatos.blob.core.windows.net/adf-img-cursos/20-35003013-docencia-de-la-formacion-profesional-para-el-empleo.png",
            nombre:"Docencia de la formacion Profesional para el empleo",
            destinatarios:"Formacion Continua",
            familiaProfesional:"Servicios SocioCulturales y a la Comunidad",
            descripcion:"¿Te gustaría ser docente? Si quieres desarrollar tu carrera profesional en el ámbito de la docencia, fórmate con nosotros, con este curso podrás transmitir los conocimientos adquiridos a lo largo de tu experiencia profesional. Además completamos tu f ...",
            direccion:"Telde - Las Huesas",
            horasLectivas:"340h",
            fInicio:"13/09/2021",
            fFinal:"22/12/2021",
            estadoMatricula:"-"
        },
        {
            imagenCurso:"https://adfdatos.blob.core.windows.net/adf-img-cursos/20-35002958-desarrollo-de-soluciones-microsoft-azure.png",
            nombre:"Desarrollo de soluciones de Microsoft Azure",
            destinatarios:"SCE DESEMPLEADOS/AS",
            familiaProfesional:"INFORMÁTICA, WEB Y PROGRAMACIÓN",
            descripcion:"El servicio en la nube brinda numerosas posibilidades a las empresas tales como: creación de redes, servidores físicos, máquinas virtuales, almacenamiento, plataformas de desarrollo, etc. Es un nicho de mercado con amplia demanda de profesionales capacitados para llevar a cabo estas funciones",
            direccion:"Telde - Las Huesas",
            horasLectivas:"100h",
            fInicio:"13/09/2021",
            fFinal:"08/10/2021",
            estadoMatricula:"-"
        },
        {
            imagenCurso:"https://adfdatos.blob.core.windows.net/adf-img-cursos/20-35002987-introduccion-a-las-bases-de-datos-microsoft-sql-server.png",
            nombre:"Introducción a base de datos Microsoft SQL Server",
            destinatarios:"SCE DESEMPLEADOS/AS",
            familiaProfesional:"INFORMÁTICA, WEB Y PROGRAMACIÓN",
            descripcion:"SQL es uno de los lenguajes más importantes que se debe aprender en programación, ha sido diseñado para administrar y recuperar información de sistemas de gestión de Bases de Datos. Podrás adquirir los conocimientos necesarios para la gestión de Base de Datos SQL",
            direccion:"Telde - Las Huesas",
            horasLectivas:"90h",
            fInicio:"18/10/2021",
            fFinal:"11/11/2021",
            estadoMatricula:"-"
        },
        {
            imagenCurso:"https://adfdatos.blob.core.windows.net/adf-img-cursos/prl022021-prevencion-de-riesgo-laboral-en-albanileria.png",
            nombre:"Prevención de riesgo laboral en Albañilería",
            destinatarios:"TPC",
            familiaProfesional:"PREVENCIÓN Y SALUD LABORAL",
            descripcion:"El objetivo es conseguir que los trabajadores adquieran los conocimientos necesarios para identificar los riesgos laborales más frecuentes y las medidas preventivas a implantar a fin de eliminar o minimizar dichos riesgos",
            direccion:"Gáldar",
            horasLectivas:"20h",
            fInicio:"18/10/2021",
            fFinal:"21/10/2021",
            estadoMatricula:"Cerrado"
        },
        {
            imagenCurso:"https://adfdatos.blob.core.windows.net/adf-img-cursos/20-35003013-docencia-de-la-formacion-profesional-para-el-empleo.png",
            nombre:"a",
            destinatarios:"Formacion Continua",
            familiaProfesional:"Servicios SocioCulturales y a la Comunidad",
            descripcion:"¿Te gustaría ser docente? Si quieres desarrollar tu carrera profesional en el ámbito de la docencia, fórmate con nosotros, con este curso podrás transmitir los conocimientos adquiridos a lo largo de tu experiencia profesional. Además completamos tu f ...",
            direccion:"Telde - Las Huesas",
            horasLectivas:"340h",
            fInicio:"13/09/2021",
            fFinal:"22/12/2021",
            estadoMatricula:"-"
        }
]);
// La busqueda es asignada por defecto al array de cursos para que al cargar la pagina muestre todo el array
const [busqueda,setBusqueda] = useState([...arrayCursos]);

// Evitar la repeticion de los select
const selectFamiliaProfesional = ()=>{
    let a = [];
    arrayCursos.forEach(curso=>{
        if(!a.includes(curso.familiaProfesional)){
            a.push(curso.familiaProfesional);
        }
    });
    setSelectFP(a);
    
}

const selectSituacionLaboral = ()=>{
    let a = [];
    arrayCursos.forEach(curso=>{
        if(!a.includes(curso.destinatarios)){
            a.push(curso.destinatarios);
        }
    });
    setSelectSituacion(a);
    
}

// Gestores del formulario

const gestorNombreCurso = (e) =>{
    setCurso(e.target.value);
}

const gestorFamiliaProfesional = (e) =>{
    setFamiliaProfesional(e.target.value);
}

const gestorSituacionLaboral = (e) =>{
    setSituacionLaboral(e.target.value);
}

const mostrarCursos = () =>{

     return busqueda.map(curso => {
            return(
                <div className="contenedor_tarjeta col-9 col-sm-8 col-md-5 col-lg-3">
                    <figure id="tarjeta">
                    <img src={curso.imagenCurso} className="frontal" alt="Logo del Curso"></img>
                    <div className="titulo">
                        <h2>{curso.nombre}</h2>
                    </div>
                        <figcaption className="trasera">
                            <div className="contenidoTarjeta">
                                <h2>{curso.direccion}</h2>
                                <h4>Horas:{curso.horasLectivas}</h4>
                                <p>{curso.descripcion}</p>
                            </div>
                                <div className="botonMasInfo col-12">
                                    <button onClick={()=>{meInteresa(curso)}}>Me Interesa</button>
                                </div>
                        </figcaption>
                    </figure>
                </div>
                )
                });
        
}

const buscarCurso = (e) =>{
        e.preventDefault();

        if(curso !=="" || familiaProfesional!=="" || situacionLaboral!=="" ){
            if(curso!==""){
                arrayCursos.forEach(e=>{
                    if(e.nombre === curso){
                        setBusqueda([e]);
                    }
                });
            }

            if(familiaProfesional!==""){
                arrayCursos.forEach(e=>{
                    if(e.familiaProfesional === familiaProfesional){
                        console.log(e.familiaProfesional);
                        setBusqueda([e]);
                    }
                });
            }

            if(situacionLaboral!==""){
                arrayCursos.forEach(e=>{
                    if(e.destinatarios === situacionLaboral){
                        console.log(e.familiaProfesional);
                        setBusqueda([e]);
                    }
                    });
            }
        }else{
            setBusqueda([...arrayCursos]);
        }
    
    setCurso("");
    setFamiliaProfesional("");
    setSituacionLaboral("");

}
    // Funcion del boton de me interesa el curso que lleva a su pagina de mas informacion del curso
const meInteresa = (curso) =>{
    const cursoInteres = curso;
    history.push({pathname:"/informacionCurso", state:{curso:{cursoInteres}}});
};

    // UseEffect para actualizar segun la busqueda
    useEffect(()=>{mostrarCursos();},[busqueda]);
    // UseEffect para cargar los select del buscador al cargar la pagina
    useEffect(()=>{selectFamiliaProfesional();},[]);
    useEffect(()=>{selectSituacionLaboral();},[]);
    return (
            <div className="divFormacion">
                <MenuHeader />
                    <main className="main2">
                    <div className="menuFormacion col-12">
                        <form action="" onSubmit={buscarCurso}>
                            <div className="form-group col-12 col-lg-4">
                                <label htmlFor="nombreCurso">Nombre del Curso:</label>
                                <input type="text" name="nombreCurso" id="nombreCurso" onChange={gestorNombreCurso} value={curso} />
                            </div>
                            <div className="form-group col-12 col-lg-4">
                                <label htmlFor="familiaProfesional">Familia Profesional:</label>
                                <select name="familiaProfesional" id="familiaProfesional" onChange={gestorFamiliaProfesional} value={familiaProfesional}>
                                    <option value=""> --- </option>
                                    {
                                   selectFP.map(curso=>{
                                    return <option value={curso}>{curso}</option>    
                                   })
                                }
                                </select>
                            </div>
                            <div className="form-group col-12 col-lg-4">
                                <label htmlFor="situacionLaboral">Situación Laboral:</label>
                                <select name="situacionLaboral" id="situacionLaboral" onChange={gestorSituacionLaboral} value={situacionLaboral}>
                                <option value=""> --- </option>
                                    {
                                        selectSitacion.map(curso=>{
                                            return <option value={curso}>{curso}</option>    
                                           })
                                    }
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="cursos">
                        {/* {busqueda.map(curso => {
                        return(
                        <div className="contenedor_tarjeta col-9 col-sm-8 col-md-5 col-lg-3">
                                <figure id="tarjeta">
                                <img src={curso.imagenCurso} className="frontal" alt="Logo del Curso"></img>
                                <div className="titulo">
                                    <h2>{curso.nombre}</h2>
                                </div>
                                    <figcaption className="trasera">
                                        <div className="contenidoTarjeta">
                                            <h2>{curso.direccion}</h2>
                                            <h4>Horas:{curso.horasLectivas}</h4>
                                            <p>{curso.descripcion}</p>
                                        </div>
                                            <div className="botonMasInfo col-12">
                                                <button onClick={()=>{meInteresa(curso)}}>Me Interesa</button>
                                            </div>
                                    </figcaption>
                                </figure>
                            </div>
                            )
                            })} */}
                            {mostrarCursos()}
                    </div>
                </main>
                <Footer/>
            </div>
     )
    };           
   
    
export default Formacion