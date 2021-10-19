import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "react-bootstrap";
import "../App.css";
import AlertDismissible from './Alert';

const Cart = () => {
  const { cartItems, removeItem, clear } = useContext(CartContext);
  debugger
  return (
    <div>
      <h3>{cartItems.length > 0 ? "" : <AlertDismissible/>}</h3>
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
    </div>
  );
};

export default Cart;
