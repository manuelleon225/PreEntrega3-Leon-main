import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import LogoNv from "./Logo";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeadphones, faCirclePlay, faVolumeHigh, faBagShopping, faKeyboard, faGuitar, faWind, faDrum, faHeadphonesAlt, faDesktop, faMicrophone, faSlidersH } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <Navbar expand="lg" style={navbarStyle}>
      <Navbar.Brand>
      <NavDropdown.Item as={Link} to="/"><LogoNv tamano={120} /></NavDropdown.Item>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title={<span style={navLinkStyle}><FontAwesomeIcon icon={faMusic} /> Instrumentos Musicales</span>} id="instrumentos-dropdown">
            <NavDropdown.Item as={Link} to="Category/Teclados"><FontAwesomeIcon icon={faKeyboard} /> Teclados </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="Category/Cuerdas"><FontAwesomeIcon icon={faGuitar} /> Cuerdas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="Category/Vientos"><FontAwesomeIcon icon={faWind} /> Vientos</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="Category/Percusión"><FontAwesomeIcon icon={faDrum} /> Percusión</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={<span style={navLinkStyle}><FontAwesomeIcon icon={faHeadphones} /> Audio Y amplificación</span>} id="audio-dropdown">
            <NavDropdown.Item as={Link} to="Category/produccion-musical"><FontAwesomeIcon icon={faHeadphonesAlt} /> Producción Musical</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="Category/monitores"><FontAwesomeIcon icon={faDesktop} /> Monitores</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="Category/microfonos"><FontAwesomeIcon icon={faMicrophone} /> Microfonos</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={<span style={navLinkStyle}><FontAwesomeIcon icon={faVolumeHigh} /> Producción Musical</span>} id="produccion-dropdown">
            <NavDropdown.Item as={Link} to="Category/audifonos"><FontAwesomeIcon icon={faHeadphonesAlt} /> Audifonos</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="Category/interfaces-audio"><FontAwesomeIcon icon={faCirclePlay} /> Interfaces de Audio</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="Category/superficie-control"><FontAwesomeIcon icon={faSlidersH} /> Superficie de Control</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="Category/merch" style={navLinkStyle}><FontAwesomeIcon icon={faBagShopping} /> Merch</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <div style={cartWidgetContainerStyle}>
        <CartWidget />
      </div>
    </Navbar>
  );
};

const navbarStyle = {
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  padding: '8px',
};

const navLinkStyle = {
  color: '#343a40',
  textDecoration: 'none',
};

const cartWidgetContainerStyle = {
  marginRight: '25px'
};

export default NavBar;
