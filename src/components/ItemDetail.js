import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import Spinner from "react-bootstrap/Spinner";

const Item = ({ item }) => {
  const [quantity, setQuantity] = useState();
  const onChange = (count) => {
    setQuantity(count);
  };
  console.log("====================================");
  console.log(quantity);
  console.log("====================================");
  return (
    <div style={{ display: "block"}}>
      {item && (
        <div class="card" style={{ backgroundColor: "grey"}}>
          <div class="card__title">
            <div class="icon">
              <Link to={`/`}>
                <i class="fa fa-arrow-left" />
                <span>Volver</span>
              </Link>
            </div>
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
                    style={{ width: "135px" }}
                  />
                </div>
              </div>
            </div>
            <div class="half">
              <div class="description">
                <p>${item?.price}</p>
                <p style={{ fontSize: "12px" }}>{item?.description}</p>
              </div>
              <span class="stock">
                <i class="fa fa-pen"></i> In stock
              </span>
            </div>
          </div>
          
          <div class="card__footer">
            <ItemCount stock={10} cantidad={1} initial={1} onChange={onChange} />
          </div>
        </div>
      )}
      {!item && (
        <Spinner
          className="spinner"
          animation="border"
          variant="secondary"
          class="spin"
        />
      )}
      
    </div>
  );
};

export default Item;
