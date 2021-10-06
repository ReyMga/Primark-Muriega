import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { BrowserRouter as Router, Route, Switch,useHistory } from "react-router-dom";
import "../App.js";

const NavBar = ({categories, onChange}) => {
  const history = useHistory();
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
              Carrito
            </Nav.Link>
            <CartWidget cantidad={4} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
