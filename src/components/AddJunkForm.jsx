import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";

// Custom Components
import AddJunkModal from "./AddJunkModal";

const AddJunkForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        price: 0.0,
        description: "",
        category: "",
    });
    const [itemObj, setItemObj] = useState(null);

    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errorState, setErrorState] = useState(null);
    const [validated, setValidated] = useState(false);

    // Set state for Modal visibility (ui-helper)
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Updates field data state for this piece of the form input
    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Closes alert closed by error & resets form data
    const handleAlertClose = () => {
        setSubmitted(false);
        setFormData({
            title: "",
            price: 0.0,
            description: "",
            category: "",
        });
    };

    // Handles API submission when form is submitted
    const handleFormSubmit = async (e) => {
        // Prevent default behaviour of refreshing page on submission
        e.preventDefault();
        // Store form element for inner DOM dealings
        const form = e.target;
        // Manually run built-in DOM validation & stop event propagation if
        // form is not deemed validly filled out
        if (form.checkValidity() === false) {
            e.stopPropagation();
            return;
        } else {
            // If form is valid, then we can send a request to the API and render
            // <Alert> if there is an error with the submission
            try {
                const response = await fetch("https://fakestoreapi.com/products", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error(`Server responded with ${response.status}`);
                }

                // Get information about what was added to backend directly from
                // API POST response
                const responseData = await response.json();
                setItemObj(responseData);
                setSubmitted(true);
                setShowModal(true);
                setErrorState(null);
            } catch (err) {
                setErrorState(`Issue submitting Junk: ${err.message}`);
                setSubmitted(false);
            }
        }
        setValidated(true);
    };

    return (
        <Container>
            <AddJunkModal itemObj={itemObj} submitted={submitted} showModal={showModal} handleCloseModal={handleCloseModal} />

            {errorState && (
                <Alert variant="danger" dismissable="true" onClose={handleAlertClose}>
                    {errorState}
                </Alert>
            )}

            <Form onSubmit={handleFormSubmit} noValidate validated={validated} className="">
                <Row className="justify-content-center">
                    <Col md="3">
                        <Form.Group controlId="formTitle" className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="My Junk" name="title" value={formData.title} onChange={handleFieldChange} required />
                            <Form.Control.Feedback type="invalid">Please enter a title</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md="3">
                        <Form.Group controlId="formTitle" className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select name="category" value={formData.category} onChange={handleFieldChange} required>
                                <option value=""></option>
                                <option value="electronics">electronics</option>
                                <option value="jewelery">jewelery</option>
                                <option value="mens-clothing">men's clothing</option>
                                <option value="womens-clothing">women's clothing</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Please select a category</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md="2">
                        <Form.Group controlId="formPrice" className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" min="0" placeholder="0.00" name="price" value={formData.price} onChange={handleFieldChange} required />
                            <Form.Control.Feedback type="invalid">Please enter a price</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="8">
                        <Form.Group controlId="formDescription" className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                style={{ resize: "none" }}
                                as="textarea"
                                rows={3}
                                placeholder=""
                                className="no-resize"
                                name="description"
                                value={formData.description}
                                onChange={handleFieldChange}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Please add a description</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md="4"></Col>
                </Row>
            </Form>
        </Container>
    );
};

export default AddJunkForm;
