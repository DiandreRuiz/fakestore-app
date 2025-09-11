import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Brand from "../assets/react.svg";

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light" expand="md" className="p-3 mb-4">
            <Navbar.Brand href="/">
                <img src={Brand}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" color="black" />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link as={NavLink} to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
                        Products
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
