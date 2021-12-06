import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from '../components/cuerpo/navbar'
import Inicio from '../components/cuerpo/inicio'
import Nosotros from '../components/cuerpo/nosotros'
import MasterContactos from "../components/cuerpo/masterContacto";
import Redes from '../components/cuerpo/redes';

function Routes() {
  return(
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/master&contacto" component={MasterContactos} /> 
          <Route exact path="/redes" component={Redes} /> 
        </Switch>
      </BrowserRouter>
  )
}

export default Routes;