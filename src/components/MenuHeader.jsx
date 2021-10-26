import React from 'react'
import "./MenuHeader.css";
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import logo from "../img/GrupoADF-logo.png";
const MenuHeader = () => {
    return (
        <div className="divHeader">
          <Navbar className="divNavbar" expand="md">
                <Container className="navbar">  
                    <a className="divLogo" href="/inicio">
                        <img src={logo} alt="Logo" />
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="link" href="/inicio">Inicio</Nav.Link>
                            <Nav.Link className="link" href="/formacion">Formacion</Nav.Link>
                            <Nav.Link className="link" href="/empleo">Empleo</Nav.Link>
                            <NavDropdown title="Sobre Nosotros" className="link" id="basic-nav-dropdown">
                                <NavDropdown.Item className="dropDownMenu" href="/sobrenosotros">Sobre Nosotros</NavDropdown.Item>
                                <NavDropdown.Item className="dropDownMenu" href="/Contacto">Contacto</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="link" href="/acceder">Acceder</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MenuHeader
