import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";

// Custom Components
import JunkCard from "./JunkCard";

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
        <Container className="rounded-3">
            <Row className="text-center mb-3">
                <h2 className="mb-3">The World's Best Junk</h2>
                <h6 className="" style={{ color: "orange" }}>
                    🎃 October Spooky Special 🦇
                </h6>
                <h6>FREE shipping on orders $50 or more!</h6>
            </Row>
            <div className="bg-light p-4 rounded">
                <Row className="text-center mb-3">
                    <h4>🗓️ This Week's Top Junk</h4>
                </Row>
                <Row>
                    {newestJunk.map((junk) => (
                        <Col key={junk.id}>
                            <JunkCard itemObj={junk}></JunkCard>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Button as={Link} to="/products" variant="success" size="md" className="mt-4 w-auto mx-auto">
                        See All Products
                    </Button>
                </Row>
            </div>
        </Container>
    );
};

export default HomePage;
