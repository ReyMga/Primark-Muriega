import React, { useEffect, useState } from "react";
import Item from "./Item";
import { getItems } from "../Services";

const ItemList = () => {
  const [items, setItems] = useState([]);
  useEffect(async () => {
    const _items = await getItems();
    setItems(_items);
  }, []);

  return (
    <div>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default ItemList;
