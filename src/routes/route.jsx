import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from '../components/cuerpo/navbar'
//import Inicio from './cuerpo/inicio'
import Nosotros from '../components/cuerpo/nosotros'
// import Mezcla from './cuerpo/mezcla'
import Contactos from '../components/cuerpo/contactos'
import Redes from '../components/cuerpo/redes';

function Routes() {
  return(
    <BrowserRouter>
      <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Inicio} />*/}
          <Route exact path="/nosotros" component={Nosotros} />
          {/*<Route exact path="/mezcla" component={Mezcla} />*/} 
          <Route exact path="/contacto" component={Contactos} /> 
          <Route exact path="/redes" component={Redes} /> 
        </Switch>
      </BrowserRouter>
  )
}

export default Routes;