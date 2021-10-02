import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Spinner from "react-bootstrap/Spinner";
import { getItems } from "../Services";

const ItemListContainer = (props) => {
  const { greeting } = props;
  const [items, setItems] = useState(null);
  useEffect(async () => {
    const _items = await getItems();
    setItems(_items);
  }, []);

  return (
    <div>
      <ItemList items={items} />
      <h1>{greeting}</h1>
      {!items && <Spinner animation="border" variant="secondary" />}
    </div>
  );
};

export default ItemListContainer;
