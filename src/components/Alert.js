import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../App.css";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success" className="alert">
        <Alert.Heading>Hey👀!</Alert.Heading>
        <p>
          Parece que no tienes ningún producto en tu carrito, si quieres seguir
          comprando, presiona el botón de aquí abajo
        </p>
        <hr />
        <img src="https://cdn-icons-png.flaticon.com/512/102/102661.png" />
        <br />
      </Alert>
      <Button variant="dark" className="botonVolver">
        <Link to={`/`} className='botonContinuar'>Continuar Compra</Link>
      </Button>
    </>
  );
}

export default AlertDismissible;
