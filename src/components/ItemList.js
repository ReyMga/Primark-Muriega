import React from "react";
import Item from "./Item";
import "../App.css";

const ItemList = ({items}) => {
  return (
    <div className="containerFlex">
      {items?.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default ItemList;
