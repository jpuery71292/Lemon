import React from "react";
import logo from '../components/imagenes/logo.png'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from '../components/cuerpo/navbar'
//import Inicio from './cuerpo/inicio'
import Nosotros from '../components/cuerpo/nosotros'
// import Mezcla from './cuerpo/mezcla'
// import Contactos from './cuerpo/contactos'

function Routes() {
  return(
    <BrowserRouter>
      <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Inicio} />*/}
          <Route exact path="/nosotros" component={Nosotros} />
          {/*<Route exact path="/mezcla" component={Mezcla} />
          <Route exact path="/contacto" component={Contactos} /> */} 
        </Switch>
      </BrowserRouter>
  )
}

export default Routes;