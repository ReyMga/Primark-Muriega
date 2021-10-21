import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Spinner from "react-bootstrap/Spinner";
import { getItems, getItemsByCategory } from "../Services";
import {useLocation} from 'react-router-dom';
const ItemListContainer = (props) => {
  const { greeting } = props;
  const [items, setItems] = useState(null);
  let location = useLocation(); 

  const getItemsToRender = async () => {
    let _items = [];
    if (location.pathname !== '/') {
      let selectedCategoryId = null;
      if(location.pathname.includes('category')){
        selectedCategoryId = location.pathname.replace('/category/', '')
      }
      _items = await getItemsByCategory(selectedCategoryId);
    } else {   
      _items = await getItems();
    }
    setItems(_items);
  };

  useEffect(async () => {
    await getItemsToRender();
  }, [location.pathname]);

  return (
    <div>
      <ItemList items={items} />
      <h1>{greeting}</h1>
      {!items && <Spinner animation="border" variant="secondary" />}
    </div>
  );
};

export default ItemListContainer;
