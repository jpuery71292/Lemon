import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contacto.css'
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contactos = () => {
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();
    emailjs.sendForm('service_gfs3nfd', 'template_5rzg3eu', form.current, 'user_lEqvIonKpwo9giVgPbDZY')
      .then((result) => {
          alert(result.text);
      }, (error) => {
          alert(error.text);
      });
  };

  return (
    <div>
    <form className="Contactos" ref={form} onSubmit={sendEmail}>
      <Form.Label>Nombre</Form.Label>
      <InputGroup className="mb-3">
        <FormControl
            placeholder="nombre"
            aria-label="nombre"
            aria-describedby="basic-addon2"
            required
        />
      </InputGroup>
      <Form.Label>Email</Form.Label>
      <InputGroup className="mb-3">
        <FormControl
            placeholder="email@email.com"
            aria-label="email@email.com"
            aria-describedby="basic-addon2"
            type="email"
            required
        />
      </InputGroup>
      <Form.Label>Message</Form.Label>
      <InputGroup>
        <InputGroup.Text>MENSAJE</InputGroup.Text>
        <FormControl 
            as="textarea" 
            aria-label="With textarea" 
            placeholder="Escriba su mensaje"
            />
      </InputGroup>
      <div className="Formulario">
      <Button type="submit" value="Send">Enviar</Button>
      </div>
    </form>
    </div>  
  );
};

export default Contactos
