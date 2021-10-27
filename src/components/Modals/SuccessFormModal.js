import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.css";

const SuccessFormModal = ({ show, handleClose, id }) => {
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <div style={{margin: '10px'}}>
      <Modal.Title>Orden Generada</Modal.Title>
      Orden generada correctamente con el siguiente ID: {id}
      <Modal.Footer>
        <Button className="form" variant="primary" onClick={handleClose}>
          Aceptar
        </Button>
      </Modal.Footer>
      </div>
    </Modal>
  );
};

export default SuccessFormModal;
