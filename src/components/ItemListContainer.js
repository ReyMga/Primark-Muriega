import React from 'react'
import ItemList from './ItemList';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    const {greeting} = props;

    return (
        <div>
            <ItemList/>
            <ItemCount stock={10} cantidad={1} initial={1}/>
            <h1>{greeting}</h1>
            
        </div>
        
    )
}

export default ItemListContainer
