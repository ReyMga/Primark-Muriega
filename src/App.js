import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getCategories } from "./Services";
import Cart from "./components/Cart";
import CartProvider from "./components/CartContext";


function App() {
  const [categories, setCategories] = useState(null);
  
  
  useEffect(async () => {
    const _categories = await getCategories();
    setCategories(_categories);
  }, []);

  const onChange = async (categoryId, history) => {
    history.push(`/category/${categoryId}`)
  }

  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar categories={categories} onChange={onChange} />
          <Switch>
            <Route exact path="/">
              <ItemListContainer  />
            </Route>
            {/*
              <Route path="/productos" component={ItemListContainer} />
              */}
            <Route path="/category/:id" component={ItemListContainer} exact />
            <Route path="/producto/:id" component={ItemDetailContainer} exact />
            <Route path="/carrito" component={Cart} /> 
          </Switch>
        </Router>
      </CartProvider>

    </div>
  );
}

export default App;
