import React from "react";
import { Button } from "react-bootstrap";

const CartItem = ({item, removeItem}) => {
  return (
    <div>
      <div class="card__title">
        <h2 className="id">{item?.id}</h2>
      </div>
      <div class="card__body">
        <div class="half">
          <div class="featured_text">
            <h5 class="min-height-50"> {item?.title} </h5>
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
          <div className="descriptionCart">
            <h6 style={{ marginRight: "30px" }}>
              Cantidad: {Number(item.quantity)}
            </h6>
            <h6 style={{ marginRight: "30px" }}>
              Precio unitario: {Number(item.price)}
            </h6>
            <h6 style={{ marginRight: "30px" }}>
              Subtotal: {Number(item.quantity) * Number(item.price)}{" "}
            </h6>
          </div>
        </div>
        <Button variant="primary" onClick={() => removeItem(item.id)}>
          Eliminar
        </Button>
      </div>
    </div>
  );
};

export default CartItem