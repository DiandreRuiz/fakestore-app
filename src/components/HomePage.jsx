import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import style from "../styles/HomePage.module.css";

const HomePage = () => {
    const [newestJunk, setNewestJunk] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorStatus, setErrorStatus] = useState(null);

    useEffect(() => {
        const getTopJunk = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const responseData = await response.json();
                const firstFiveItems = responseData.slice(0, 3);
                setNewestJunk(firstFiveItems); // We take only the first 5 items from the API
                setLoading(false);
            } catch (err) {
                setErrorStatus(`Error trying to get top junk: ${err.message}`);
                setLoading(false);
            }
        };
        getTopJunk();
    }, []);

    if (loading) {
        return (
            <Container className="text-center">
                <br />
                <br />
                <Spinner animation="border" variant="primary" className="mt-5"></Spinner>
            </Container>
        );
    }
    if (errorStatus) {
        return (
            <Container className="text-center">
                <p style={{ color: "red" }}>{errorStatus}</p>
            </Container>
        );
    }

    return (
        <Container>
            <Row className="text-center mb-3">
                <h1>This Week's Top Junk</h1>
            </Row>
            <Row>
                {newestJunk.map((junk) => (
                    <Col>
                        <Card key={junk.id} className={style.junkCard} as={Link} to={`products/${junk.id}`}>
                            <Card.Header>{junk.title}</Card.Header>
                            <Card.Img variant="bottom" src={junk.image} className="w-50 mx-auto m-3"></Card.Img>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row className="justify-content-center">
                <Col xs="auto">
                    <Button as={Link} to="/products" variant="warning" size="md" className="mt-4">
                        See All Products
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
