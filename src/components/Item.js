import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


const Item = (props) => {
  const { id, title, description, price, imageUrl } = props.item;
  return (
    <div style={{display: 'block'}}>
      <div class="container">

        <div class="card">
          <div class="box">
            <div class="content">
              <h2 className="id">{id}</h2>
              <h3>{title}</h3>
              <img
                src={imageUrl}
                alt="this is image"
                style={{ width: "135px"}}
              />
              <p>${price}</p>
              <Link to={`/producto/${id}`}>Ver producto</Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
