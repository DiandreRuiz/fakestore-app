import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePage = () => {
    return (
        <Container>
            <Row className="text-center mb-3">
                <h1>Welcome to the Fake Store!</h1>
                <h5>We have lots of exciting, fake items for you to see</h5>
            </Row>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <Button as={Link} to="/products" variant="warning" size="sm">
                        See Our Products
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
