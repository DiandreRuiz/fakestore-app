import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Pull products from products API
// - Image
// - Title
// - Price
// - Button to view details page (Navigates to product details page)
// Display products on product cards that wrap when screen is smaller

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
                <p style={{ color: "green" }}>Loading</p>
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
            {products.map((prod) => (
                <Card key={prod.id}>
                    <Card.Header>{prod.title}</Card.Header>
                    <Card.Img src={prod.image}></Card.Img>
                    <Card.Footer>
                        ${Number(prod.price).toFixed(2)}
                        <Button as={Link} to={`/products/${prod.id}`}>
                            Product Details
                        </Button>
                    </Card.Footer>
                </Card>
            ))}
        </Container>
    );
};

export default Products;
