import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.css";
import { validateEmail } from "../../helpers/validations";

const BuyerDataModal = ({
  show,
  handleClose,
  onChangeHandler,
  inputValue,
  dirty,
  handleSend,
}) => {
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Datos del Comprador</Modal.Title>
      </Modal.Header>

      <div className="form">
        <label for="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Ingrese email"
          onChange={onChangeHandler}
          value={inputValue.email}
          maxLength="40"
        />
        <span className="error">
          {dirty && inputValue.email.length === 0 && (
            <span>No puede estar vacio</span>
          )}
        </span>
        <span className="error">
          {dirty && !validateEmail(inputValue.email) && (
            <span>Ingrese un email válido</span>
          )}
        </span>
        <br />
        <br />
        <label for="emailValidado">Repetir Email</label>
        <input
          type="text"
          id="emailValidado"
          placeholder="Ingrese nuevamente su email"
          onChange={onChangeHandler}
          value={inputValue.emailValidado}
          maxLength="40"
        />
        <span className="error">
          {dirty && inputValue.emailValidado.length === 0 && (
            <span>No puede estar vacio</span>
          )}
        </span>
        <br />
        <span className="error">
          {inputValue.email.length > 0 &&
            inputValue.email !== inputValue.emailValidado && (
              <span>Los mails no concuerdan</span>
            )}
        </span>
        <br />
        <label for="phone">Teléfono</label>
        <input
          type="phone"
          id="phone"
          placeholder="Ingrese telefono"
          onChange={onChangeHandler}
          value={inputValue.phone}
          maxLength="20"
        />
        <span className="error">
          {dirty && inputValue.phone.length === 0 && (
            <span>No puede estar vacio</span>
          )}
        </span>
        <br></br> <br></br>
        <label for="name">Nombre</label>
        <input
          id="name"
          type="text"
          placeholder="Ingrese nombre"
          onChange={onChangeHandler}
          value={inputValue.name}
          maxLength="30"
        />
        <span className="error">
          {dirty && inputValue.name.length === 0 && (
            <span>No puede estar vacio</span>
          )}
        </span>
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSend}>
          Finalizar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BuyerDataModal;
