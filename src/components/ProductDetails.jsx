import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ProductDetails = () => {
    // Take product ID from the url params in the Route's URL
    const { productId } = useParams();

    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorStatus, setErrorStatus] = useState(null);

    useEffect(() => {
        // grab the information about this product for product details information using the product ID
        const getProductDetails = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const responseData = await response.json();
                console.log(responseData);
                setProductDetails(responseData);
                setLoading(false);
            } catch (err) {
                setErrorStatus(`Issue retrieving product details for product id ${productId}: ${err.message}`);
                setLoading(false);
            }
        };

        getProductDetails();
    }, [productId]); // We add productId to dependency list so that if it's updated in the browser,

    if (loading) {
        return (
            <Container className="text-center">
                <p style={{ color: "green" }}>
                    Loading...
                </p>
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
        <Container className="">
            <Row className="justify-content-evenly">
                <Col className="col-6 bg-light p-5">
                    <h3>{productDetails.title}</h3>
                    <img src={productDetails.image} className="w-100"></img>
                </Col>
                <Col className="col-4 bg-light p-5">
                    <p>{productDetails.description}</p>
                    <p style={{ color: "grey" }}>${productDetails.price}</p>
                    <Button>Add to Cart</Button>
                </Col>
            </Row>
        </Container>
    );
    // this component will get re-rendered with correct product Id and update to new info
};

export default ProductDetails;
