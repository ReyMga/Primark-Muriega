
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import Spinner from "react-bootstrap/Spinner";


const Item = ({item}) => {
  return (
    <div  style={{display: 'block'}}>
       {item && <div class="container">
        <div class="card">
            <div class="box">
                <div class="content">
                    <h2 className="id">{item?.id}</h2>
                        {item?.title}
                        <img
                        src={item?.imageUrl}
                        alt="this is image"
                        style={{ width: "135px" }}
                        />
                    <p>${item?.price}</p>
                    <p style={{fontSize: '12px'}}>
                    {item?.description}
                    </p>
                    <Link to={`/`}>Volver</Link>
                </div>
            </div>
        </div>
      </div>}
      {!item && <Spinner className="spinner" animation="border" variant="secondary" class="spin"/>}
    </div>
  );
};

export default Item;



