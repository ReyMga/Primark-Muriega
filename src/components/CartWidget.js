import React from 'react'


const CartWidget = ({cantidad}) => {
    return (
        <div className="marginTop3">
            <i className="fab fa-opencart myCart" ></i> <span className="myCart">{cantidad}</span>
        </div>
    )
}




export default CartWidget
