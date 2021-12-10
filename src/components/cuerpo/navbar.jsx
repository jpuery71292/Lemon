import {
  Container, 
  Nav, 
  NavDropdown
} 
from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../imagenes/logo.png'
import { FiMenu } from 'react-icons/fi'

function Menu() {
  return(
    <div className="navbar">
    <Container>
        <div className="Menu">
          <div className="Menu-izq">
            <Link to='/'><img className="Logo" src={logo} alt={logo.name} /></ Link>
          </div>
          <div className="Menu-der">
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/master&contacto">Mezcla</Nav.Link>
            <Nav.Link href="/redes">Redes</Nav.Link>
          </div>
        </div>
          <div className="Menu-responsive">
            <Nav>
              <NavDropdown title={<FiMenu />} id="basic-nav-dropdown">
                <NavDropdown.Item href="/nosotros">Nosotros</NavDropdown.Item>
                <NavDropdown.Item href="/master&contacto">Mezcla</NavDropdown.Item>
                <NavDropdown.Item href="/redes">Redes</NavDropdown.Item>
              </NavDropdown>
            </ Nav>
          </div>
      </Container>
    </div>
  )
}

export default Menu
