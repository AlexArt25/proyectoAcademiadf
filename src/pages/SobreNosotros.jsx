import React from 'react'
import MenuHeader from '../components/MenuHeader';
import Footer from '../components/Footer';
import "./SobreNosotros.css";
const SobreNosotros = () => {
    return (
        <div className="divSobreNosotros">
            <MenuHeader/>
            <main className="main">
                <h1>Sobre Nosotros</h1>
                <div className="sobreNosotrosImg col-sm-10">
                </div>
                <div className="sobreNosotros">
                    <p>
                        En el  <span>Grupo ADF</span> (formado por las empresas: <span>Academia de Desarrollo Formativo, S.L. , Círculo de Fomación Empleo e Innovación, S.L., Formavanza, S.L. </span> , junto a sus marcas <span>Empleoaqui.com</span> y <span>Estudiaencasa.es</span>) ofrecemos formación profesional tanto presencial como virtual, además de intermediación laboral para el empleo.
                    </p>
                    <p>   
                        Nuestra trayectoria comienza en el año 2003 y durante este periodo nos hemos consolidado en el sector de la formación profesional, ampliando nuestra cobertura a varios municipios de la provincia de Las Palmas gracias a nuestras diferentes sedes físicas. Actualmente, las ventajas de la web 2.0 nos ha permitido la internacionalización de nuestros productos y servicios al continente asiático, sur de Europa y Latinoamérica.
                    </p>
                    <p>              
                        Desde el primer contacto procuramos un trato cercano y personalizado con cada uno de nuestros alumnos y alumnas, compartiendo y celebrando la consecución de sus metas gracias a su esfuerzo y nuestra ayuda.
                    </p>
                    <p>
                        Nuestros centros están autorizados por entidades y empresas de prestigio como <span>Microsoft, Ministerio del Interior, Servicio Canario de Empleo, Fundación Tripartita para la Formación en el Empleo, Consejería de Educación del Gobierno de Canarias, Fundación Laboral de la Construcción,ESSSCAN</span> (Escuela de Servicios Sanitarios y Sociales de Canarias). Eso nos ha permitido disponer de una oferta académica especializada y de calidad que aporta valor a un amplio abanico de clientes.
                    </p>
                    <h2> Responsabilidad Corporativa</h2>
                    <p>
                        En el Grupo ADF apostamos por desarrollar una estrategia empresarial que integra el compromiso social en nuestra gestión. Por ello, hemos asumido un desarrollo y crecimiento empresarial sostenible donde nuestras prioridades pasan por el cuidado del medioambiente, la mejora continua de nuestros recursos humanos, el apoyo a entidades sociales y colectivos desfavorecidos y por el fomento de una política de conciliación que mantenga un nivel de satisfacción alto entre nuestro personal.
                    </p>
                    <p>
                        Todo ello lo venimos consiguiendo a través de las diferentes acciones y compromisos que desde la dirección de esta empresa se han puesto en marcha. Ejemplos como el desarrollo de nuestro primer Plan de Igualdad, o nuestro compromiso y colaboración con entidades y ongs de nuestro entorno avalan esta política de hechos en la que creemos enormemente.
                    </p>
                    <p>
                        Estamos convencidos de que se puede incrementar la competitividad de nuestra empresa sin menoscabar nuestros compromisos de sostenibilidad y compromiso social.
                    </p>
                    <p>
                        Desde la dirección creemos que esta filosofía constituye una oportunidad para la mejora de beneficios de nuestra empresa, y que además ayuda a construir una sociedad más justa y eficiente y que garantiza, con la inclusión de la igualdad de oportunidades, mayores niveles de cohesión social.
                    </p>
                    <p>
                        <span>Nuestra Filosofía, Misión, Visión y Valores</span> del Grupo ADF se puede encontrar en nuestra web <a href="http://www.grupo-adf.com/filosofia">grupo-adf.com/filosofia</a>.   
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default SobreNosotros
