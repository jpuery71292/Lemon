import Contactos from "./contactos"
import Mezcla from "./mezcla"
import './contacto.css'

function MasterContactos(){
    return(
        <div className="contenedor">
            <div className="divisor"><Mezcla/></div>
            <div className="divisor"><Contactos/></div>
        </div>
    )
}

export default MasterContactos