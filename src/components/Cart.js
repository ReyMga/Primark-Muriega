import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Button } from "react-bootstrap";
import "../App.css";
import AlertDismissible from "./Alert";
import { createOrder } from "../Services";
import SuccessFormModal from "./Modals/SuccessFormModal";
import { useHistory } from "react-router-dom";
import { validateEmail, formatDate } from "../helpers/validations";
import BuyerDataModal from "./Modals/BuyerDataModal";
import CartItem from "./CartItem";

const Cart = () => {
  const history = useHistory();
  const { cartItems, removeItem, clear } = useContext(CartContext);
  const [orderGenerated, setOrderGenerated] = useState({
    generated: false,
    orderId: null,
  });
  const [successModalShow, setSuccessModalShow] = useState(false);
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
  const handleSuccessClose = () => {
    setSuccessModalShow(false);
    localStorage.clear();
    clear();
    history.push("/");
  };
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
    //Validación de los emails con @
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
    setOrderGenerated({ generated: true, orderId: orderId });
    setSuccessModalShow(true);
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
          <CartItem item={item} removeItem={removeItem}></CartItem>
        ))}
      </div>
      {cartItems.length > 0 && (
        <Button variant="primary" onClick={handleShow}>
          Terminar compra
        </Button>
      )}
       <BuyerDataModal
            show={show}
            handleClose={handleClose}
            onChangeHandler={onChangeHandler}
            inputValue={inputValue}
            dirty={dirty}
            handleSend={handleSend}
        />
      {orderGenerated.generated && (
        <SuccessFormModal
          id={orderGenerated.orderId}
          show={successModalShow}
          handleClose={handleSuccessClose}
        />
      )}
    </div>
  );
};

export default Cart;
