import React from 'react'
import "./InformacionCurso.css"
import { useLocation, useHistory } from 'react-router';
import MenuHeader from '../components/MenuHeader';
import Footer from '../components/Footer';
const InformacionCurso = (props) => {
// Declaramos el history para pasar los datos a la siguiente pagina segun sea la eleccion del usuario
const history = useHistory();
// UseLocation para acceder a los parametros que le pasamos con el history.push desde el otro componente
const location = useLocation();
// Obtenemos los datos del curso
const cursoInteres =location.state.curso.cursoInteres;

// Funcion para Asociar la preinscripcion al curso solicitado
const preincripcionCurso = (e)=>{
    // Obtenemos el nombre del curso solicitado de la tabla de informacion del curso
    const nombreCurso = e;
    // Pasamos dicho nombre a la página de formulario de la preinscripcion
    history.push({pathname:"/preinscripcion", state:{curso:{nombreCurso}}});
    
}
const masInformacionCurso = (e)=>{
     // Obtenemos el nombre del curso solicitado de la tabla de informacion del curso
     const nombreCurso = e;
     // Pasamos dicho nombre a la página de formulario de mas informacion de dicho curso
     history.push({pathname:"/masinformacion", state:{curso:{nombreCurso}}});
}
return (
<div className="divInformacionCurso">
    <MenuHeader />
    <main className="main">
        <div className="tablaInformacionCurso">
            <h1>{cursoInteres.nombre}</h1>
            <table className="tablaInfo">
                <tbody>
                    <tr>
                        <th scope="row" className="headerTabla">Área</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.familiaProfesional}</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="headerTabla">Centro</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.direccion}</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="headerTabla">Nombre del Curso</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.nombre}</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="headerTabla">Fecha de Inicio</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.fInicio}</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="headerTabla">Fecha de Fin</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.fFinal}</p>
                        </td>
                    </tr>
                    <tr>

                        <th scope="row" className="headerTabla">Tipo de Curso</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.destinatarios}</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="headerTabla">Horas</th>
                        <td className="cuerpoTabla">
                            <p>{cursoInteres.horasLectivas}</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="headerTabla">Presentacion</th>
                        <td className="cuerpoTabla">
                            <p className="descripcionCurso">{cursoInteres.descripcion}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="botonesInfo">
                <div className="separacionHeader col-5 col-sm-3"></div>
                <div className="botones col-7 col-sm-9">
                    <button onClick={()=>{preincripcionCurso(cursoInteres.nombre);}}>Preinscribirme</button>
                    <button onClick={()=>{masInformacionCurso(cursoInteres.nombre);}}>Más Información</button>
                </div>
            </div>
        </div>
    </main>
    <Footer/>
</div>
)
}

export default InformacionCurso