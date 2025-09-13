import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Brand from "../assets/trendy_threads_logo.png";

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light" expand="md" className="p-3 mb-4">
            <Container>
                <Navbar.Brand href="/" className="">
                    <img src={Brand} style={{width: "100px"}}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" color="black" />
                <Navbar.Collapse className="d-inline-block w-auto">
                    <Nav>
                        <Nav.Link as={NavLink} to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
                            Products
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
