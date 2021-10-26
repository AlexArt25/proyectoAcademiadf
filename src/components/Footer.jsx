import React from 'react'
import "./Footer.css"
import sce from "../img/sce.gif"
import fse1 from "../img/fse1.png"
import fse2 from "../img/fse2.png"
import img012 from "../img/012.gif"
import sepe from "../img/meyss.png"
import empleoAqui from "../img/empleoaqui.png"
import estudiaencasa from "../img/estudiaencasa.png"
import formavanza1 from "../img/formavanza.png"
import cife from "../img/cife.png"


const Footer = () => {
    return (
        <div className="divFooter">
            <div className="colaboradores col-12 col-md-4">
                <div className="imgColaboradores">
                    <a href="http://www3.gobiernodecanarias.org/empleo/portal/web/sce">
                        <img src={sce} alt="SCE"/>
                    </a>
                    <a href="https://ec.europa.eu/esf/home.jsp?langId=es">
                        <img src={fse2} alt="FSE"/>
                    </a>
                    <a href="https://ec.europa.eu/esf/home.jsp?langId=es">
                        <img src={fse1} alt="FSE"/>
                    </a>
                    <a id="img012" href="https://www3.gobiernodecanarias.org/empleo/portal/web/sce">
                        <img src={img012} alt="012"/>
                    </a>
                    <a id="sepe" href="https://sede.sepe.gob.es/portalSede/es/">
                        <img src={sepe} alt="SEPE"/>
                    </a>
                </div>
            </div>
            <div className="empresa col-12 col-md-4">
                <div className="imgEmpresa">
                    <a href="https://www.empleoaqui.com/inicio">
                        <img src={empleoAqui} alt="Empleo Aqui" />
                    </a>
                    <a href="https://www.estudiaencasa.es/">
                        <img src={estudiaencasa} alt="Estudia En Casa" />
                    </a>
                    <a href="/">
                        <img src={formavanza1} alt="Formavanza" />
                    </a>
                    <a href="https://www.academiadf.com/contacto">
                        <img src={cife} alt="Circulo de Formación, Empleo e Innovación" />
                    </a>
                </div>
            </div>
            <div className="newsLetter col-12 col-md-4">
                <div className="divNewsLetter">
                    <form action="">
                    <h4>Subscribete a nuestro Newsletter</h4>
                        <input type="text" name="email" id="email" placeholder="Email" />
                        <div className="form-group">
                            <input type="checkbox" name="condicionesLegales" id="condicionesLegales"/>
                            <p>He leido y acepto las <a href="https://www.academiadf.com/adfv2012/ADF_Politica.aspx">Condiciones Legales</a></p>
                        </div>
                        <button>Subscribirme</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
