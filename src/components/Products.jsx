import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom Components
import JunkCard from "../components/JunkCard";

const Products = () => {
    // Declare State
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorStatus, setErrorStatus] = useState(null);

    useEffect(() => {
        // useEffect for grabbing content
        const getProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const responseData = await response.json();
                console.log(responseData);
                setProducts(responseData);
                setLoading(false);
                // Because loading does not refer to the rendering of components but rather the calling for information
                // from the backend, this is where we update our loading state
            } catch (err) {
                setErrorStatus(`Unable to get product information: ${err.message}`);
                setLoading(false);
            }
        };
        getProducts();
        // Get information from server
    }, []);

    // Conditional rendering
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
            <Row>
                {products.map((prod) => (
                    <Col key={prod.id} md={4} className="mb-4">
                        <JunkCard itemObj={prod}></JunkCard>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;
