import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BrandEarth from "../assets/planet.svg";
import BrandText from "../assets/text.svg";
import navStyles from "../styles/NavBar.module.css";

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light" expand="md" className="p-1 mb-4">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand href="/" className="brand-logo brandLogo">
                    <div className={navStyles.logoContainer}>
                        {/* Static center logo */}
                        <img src={BrandEarth} alt="Shirt logo" className={navStyles.logoEarth} />

                        {/* Rotating wrapper for orbiting text */}
                        <div className={navStyles.orbit}>
                            <img src={BrandText} alt="Text logo" className={navStyles.logoText} />
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" color="black" />
                <Navbar.Collapse className="w-auto flex-grow-0">
                    <Nav className="text-center">
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
