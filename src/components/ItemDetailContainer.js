import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getItem } from "../Services";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = (props) => {
    let { id } = useParams();
    const [item, setItem] = useState();
    useEffect(async () => {
      const _item = await getItem(id);
      setItem(_item);
    }, []);

    return (
        <div>
          <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer
