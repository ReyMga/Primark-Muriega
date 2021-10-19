import React, {useContext} from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { BrowserRouter as Router, Route, Switch,useHistory } from "react-router-dom";
import "../App.js";
import {CartContext} from './CartContext';


const NavBar = ({categories, onChange}) => {
  const history = useHistory();
  const { cartItems} = useContext(CartContext);
  debugger
  let cantidad= 0; 
  cartItems.forEach(item => cantidad = cantidad + item.quantity )

  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Navbar.Brand href="#" className="title_navBar">
          Primark-Muriega
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Categorias"
                menuVariant="dark"
                onSelect={(event) => onChange(event, history)}
              >
                {categories?.map(category => <NavDropdown.Item eventKey={category.id}>{category.name}</NavDropdown.Item>)}
              </NavDropdown>
            </Nav>
            <Nav.Link as={Link} to="/carrito">
            <CartWidget cantidad={cantidad} />
            </Nav.Link>
             
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
