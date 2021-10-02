import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const inicio = () => <span>inicio</span>;
const carrito = () => <span>carrito</span>;

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="El carrito de compras está vacío" />
          </Route>
          {/*
            <Route path="/productos" component={ItemListContainer} />
            <Route path="/carrito" component={carrito} /> 
            */
          }
          <Route path="/producto/:id" component={ItemDetailContainer} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
