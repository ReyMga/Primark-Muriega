import { createContext, useState } from "react";

export const CartContext = createContext();



export default ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const isInCart = (id) => cartItems.some(item=> item.id == id)

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)){
      setCartItems([...cartItems, {...item, quantity}]);
    }
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(x => x.id != itemId));
  };

  const clear= () => {
    setCartItems([]);
  }

  const store = {
    cartItems,
    isInCart,
    addItem,
    clear,
    removeItem
  };

  return (
    <CartContext.Provider value={store}>{children}</CartContext.Provider>
  );
};
