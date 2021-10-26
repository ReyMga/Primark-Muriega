import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Button, Modal } from "react-bootstrap";
import "../App.css";
import AlertDismissible from "./Alert";
import { createOrder } from "../Services";

const formatDate = (date) =>
  date.getDate().toString().padStart(2, 0) +
  "-" +
  date.getMonth().toString().padStart(2, 0) +
  "-" +
  date.getFullYear();

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const Cart = () => {
  const { cartItems, removeItem, clear } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    emailValidado: "",
    phone: "",
    name: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isFormValid = () => {
    let valid = true;
    for (const property in inputValue) {
      if (inputValue[property].length === 0) {
        valid = false;
        break;
      }
    }
    //mails concuerden
    if (inputValue.email !== inputValue.emailValidado) {
      valid = false;
    }
    //Validación para que los emails concuerden
    if (!validateEmail(inputValue.email)) {
      valid = false;
    }
    return valid;
    
  };
  const handleSend = async () => {
    setDirty(true);
    if (!isFormValid()) {
      return;
    }
    handleClose();
    //Grabar en firebase la data.

    const order = {
      buyer: {
        name: inputValue.name,
        phone: inputValue.phone,
        email: inputValue.email,
      },
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
      })),
      date: formatDate(new Date()),
      total: cartItems.reduce(
        (acc, item) => acc.price + item.price * item.quantity
      ),
    };

    const orderId = await createOrder(order);

    //Modal se genero su orden con este nro de ID {orderId}
    //Borrar LocalStorage
  };

  const onChangeHandler = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div>
      <h3>{cartItems.length > 0 ? "" : <AlertDismissible />}</h3>
      {cartItems.length > 0 && (
        <Button variant="primary" onClick={clear}>
          Eliminar todos{" "}
        </Button>
      )}
      <div className="containerFlex">
        {cartItems.map((item) => (
          <div>
            <div class="card__title">
              <h2 className="id">{item?.id}</h2>
            </div>
            <div class="card__body">
              <div class="half">
                <div class="featured_text">
                  {item?.title}
                  <div class="image">
                    <img
                      src={item?.imageUrl}
                      alt="this is image"
                      style={{ width: "135px", height: "135px" }}
                    />
                  </div>
                </div>
              </div>
              <div class="half">
                <div class="description">
                  <h4 style={{ marginRight: "30px" }}>
                    Subtotal: {Number(item.quantity) * Number(item.price)}{" "}
                  </h4>
                </div>
              </div>
              <Button variant="primary" onClick={() => removeItem(item.id)}>
                Eliminar
              </Button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <Button variant="primary" onClick={handleShow}>
          Terminar compra
        </Button>
      )}
      <Modal show={show} onHide={handleClose} animation={false} >
        <Modal.Header closeButton>
          <Modal.Title>Datos del Comprador</Modal.Title>
        </Modal.Header>

        <div className='form'>
          <label for="email">Email</label>
          <br/>
          <input
            type="email"
            id="email"
            placeholder="Ingrese email"
            onChange={onChangeHandler}
            value={inputValue.email}
            maxLength="40"
          />
          <br/>
          <span className="error">
            {dirty && inputValue.email.length === 0 && (
              <span>No puede estar vacio</span>
            )}
          </span>
          <span className="error">
            {dirty && !validateEmail(inputValue.email) && <span >Ingrese un email válido</span>}
          </span>
          <br/>
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
          <span className="error-mail">
            {inputValue.email.length > 0 &&
              inputValue.email !== inputValue.emailValidado && (
                <span>Los mails no concuerdan</span>
              )}
          </span>
          <br/>
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
    </div>
  );
};

export default Cart;
