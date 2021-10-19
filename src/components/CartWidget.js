import React from 'react'
import { BsCart3 } from "react-icons/bs";

const CartWidget = ({cantidad}) => {
    return (
        <div className="marginTop3">
            <BsCart3/> 
            {cantidad > 0 && <span className="myCart ml5" >{cantidad}</span>}
        </div>
    )
}




export default CartWidget
