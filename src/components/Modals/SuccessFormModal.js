import React from "react";
import { Button, Modal } from "react-bootstrap";

const SuccessFormModal = ({ show, handleClose, id }) => {
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Datos del Comprador</Modal.Title>
      </Modal.Header>
      Orden generada correctamente con el siguiente ID: {id}
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessFormModal;
