import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch,useHistory } from "react-router-dom";
import { getCategories } from "./Services";


const inicio = () => <span>inicio</span>;
const carrito = () => <span>carrito</span>;

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
      <Router>
        <Navbar categories={categories} onChange={onChange} />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="El carrito de compras está vacío" />
          </Route>
          {/*
            <Route path="/productos" component={ItemListContainer} />
            <Route path="/carrito" component={carrito} /> 
            */}
          <Route path="/category/:id" component={ItemListContainer} exact />
          <Route path="/producto/:id" component={ItemDetailContainer} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
