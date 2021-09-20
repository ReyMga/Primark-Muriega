import React from 'react'

const CartWidget = ({cantidad}) => {
    return (
        <div className="marginTop3">
            <i className="bi bi-cart3 myCart" ></i> <span className="myCart">{cantidad}</span>
        </div>
    )
}

export default CartWidget
