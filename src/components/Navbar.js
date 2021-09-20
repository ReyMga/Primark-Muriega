import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer';


const NavBar = () => {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">
                            Primark-Muriega
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/inicio">Inicio</Nav.Link>
                                <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                                <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
                                <CartWidget cantidad={4}/>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                    <ItemListContainer/>
                </div>
            </Router>
        )
}

export default NavBar;