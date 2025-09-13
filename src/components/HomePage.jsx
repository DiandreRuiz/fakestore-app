import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const HomePage = () => {
    const [topJunk, setTopJunk] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorStatus, setErrorStatus] = useState(null);

    useEffect(() => {
        const getTopJunk = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const responseData = await response.json();
                console.log(responseData);
                setLoading(false);
            } catch (err) {
                setErrorStatus(`Error trying to get top junk: ${err.message}`);
                setLoading(false);
            }
        };
        getTopJunk();
    });

    if (loading) {
        return <p styles={{ color: "green" }}>Loading...</p>;
    }

    return (
        <Container>
            <Row className="text-center mb-3">
                <h1>This Week's Top Junk</h1>
            </Row>
            <Row></Row>

            <Row className="justify-content-center">
                <Col xs="auto">
                    <Button as={Link} to="/products" variant="warning" size="sm">
                        See All Products
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
