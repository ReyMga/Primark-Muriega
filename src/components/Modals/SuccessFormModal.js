import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.css";

const SuccessFormModal = ({ show, handleClose, id }) => {
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Title>Datos del Comprador</Modal.Title>
      Orden generada correctamente con el siguiente ID: {id}
      <Modal.Footer>
        <Button className="form" variant="primary" onClick={handleClose}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessFormModal;
